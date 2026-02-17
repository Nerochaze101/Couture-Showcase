import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Try to parse the error message if standard format
        try {
          const error = await res.json();
          throw new Error(error.message || "Failed to submit inquiry");
        } catch (e) {
          throw new Error("Failed to submit inquiry");
        }
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for contacting Nerochaze Couture. We will respond shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
