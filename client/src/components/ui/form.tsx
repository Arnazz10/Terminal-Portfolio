import * as React from "react";
import { FormProvider, Controller, type UseFormReturn } from "react-hook-form";

export function Form<TFieldValues>({ children, ...form }: UseFormReturn<TFieldValues> & { children: React.ReactNode }) {
  return <FormProvider {...(form as any)}>{children}</FormProvider>;
}

export function FormField({ name, render, control }: any) {
  return <Controller name={name} control={control} render={render} />;
}

export function FormItem({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1">{children}</div>;
}

export function FormLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <label className={`block text-sm font-medium ${className}`}>{children}</label>;
}

export function FormControl({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function FormMessage({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <p className="text-sm text-red-500">{children}</p>;
}


