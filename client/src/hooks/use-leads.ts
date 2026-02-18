import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/schema"; // Actually importing from shared/schema based on provided context
import { useToast } from "@/hooks/use-toast";

// NOTE: Ideally we would import 'api' from @shared/routes, but based on the prompt context
// the schema was provided in one block and routes manifest in another.
// Assuming standard import paths for a generated project.

// We need to define the fetcher manually since we are using raw fetch in the mutation
// usually.

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
