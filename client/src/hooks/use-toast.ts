export function useToast() {
  return {
    toast: ({ title, description, variant }: { title: string; description?: string; variant?: "default" | "destructive" }) => {
      if (variant === "destructive") {
        console.error(`[Toast] ${title}${description ? ` - ${description}` : ""}`);
      } else {
        console.log(`[Toast] ${title}${description ? ` - ${description}` : ""}`);
      }
    },
  };
}


