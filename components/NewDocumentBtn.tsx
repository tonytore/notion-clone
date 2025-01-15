"use client";

import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/Action/actions";

const NewDocumentBtn = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleCreateNewBtn = () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };
  return (
    <div>
      <Button onClick={handleCreateNewBtn} disabled={isPending}>
        {isPending ? "creating" : "New Document"}
      </Button>
    </div>
  );
};

export default NewDocumentBtn;
