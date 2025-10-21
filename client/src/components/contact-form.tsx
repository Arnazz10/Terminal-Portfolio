import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Email sending removed — contact form is now frontend-only (simulated send)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const insertContactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    setIsLoading(true);
    try {
      // Simulate a send for demo-only frontend: show loading then success animation/toast
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message simulated",
        description: "This is a frontend demo; the message was not actually sent.",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to simulate send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8" data-testid="contact-form-success">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-primary mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-4">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-border hover:bg-secondary"
          data-testid="button-send-another"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div data-testid="contact-form">
      <h3 className="text-lg font-semibold mb-4 text-primary">$ ./send-message.sh</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-accent">Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="Your full name"
                      className="bg-input border-border text-foreground"
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-accent">Email</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input border-border text-foreground"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-accent">Subject</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Brief description of your inquiry"
                    className="bg-input border-border text-foreground"
                    data-testid="input-subject"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-accent">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    placeholder="Tell me about your project, collaboration opportunity, or question..."
                    className="bg-input border-border text-foreground min-h-[120px]"
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-primary text-primary-foreground hover:bg-accent w-full"
            data-testid="button-submit-contact"
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⚡</span>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}


