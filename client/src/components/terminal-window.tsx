interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({ title = "terminal@portfolio", children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`} data-testid="terminal-window">
      <div className="terminal-header" data-testid="terminal-header">
        <div className="terminal-dot terminal-dot-red"></div>
        <div className="terminal-dot terminal-dot-yellow"></div>
        <div className="terminal-dot terminal-dot-green"></div>
        <span className="text-muted-foreground text-sm ml-4">{title}</span>
      </div>
      <div className="p-6" data-testid="terminal-content">
        {children}
      </div>
    </div>
  );
}


