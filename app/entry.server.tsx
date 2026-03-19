import { PassThrough } from "node:stream";

import { createReadableStreamFromReadable } from "@react-router/node";
import { type EntryContext, ServerRouter } from "react-router";
import { renderToPipeableStream } from "react-dom/server";

export const streamTimeout = 10_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  return new Promise<Response>((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        onShellReady() {
          responseHeaders.set("Content-Type", "text/html");

          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
      }
    );

    setTimeout(abort, streamTimeout + 1_000);
  });
}

export function handleError(
  error: unknown,
  { request }: { request: Request }
) {
  if (!request.signal.aborted) {
    console.error(error);
  }
}
