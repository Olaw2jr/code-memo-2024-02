import { NextResponse } from "next/server";

/**
 * Handles GET requests to the API endpoint.
 *
 * This function extracts the `id` parameter from the URL and returns
 * a JSON response with the greeting "hello".
 *
 * @param {object} request - The incoming HTTP request object.
 * @param {object} context - Additional context for the request, including URL parameters.
 * @returns {NextResponse} A JSON response containing the string "hello".
 */
export async function GET(request, context) {
  console.log("Received request with context:", context);  // Enhanced logging for clarity
  console.log("Extracted ID parameter:", context.params.id);
  return NextResponse.json("hello");
}
