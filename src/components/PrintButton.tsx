"use client";

import { Button } from "./Button";

/** Prints the packet, which is how most people will save it as a PDF. */
export default function PrintButton() {
  return (
    <Button type="button" variant="outline" onClick={() => window.print()} className="no-print">
      Print or save as PDF
    </Button>
  );
}
