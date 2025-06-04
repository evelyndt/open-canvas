export type AgentName =
  | "open_canvas"
  | "reflection"
  | "summarizer"
  | "thread_title"
  | "web_search";

const DEFAULT_AGENT_MODELS: Record<AgentName, string> = {
  open_canvas: "gemini-2.0-flash",
  reflection: "claude-3-5-sonnet-20240620",
  summarizer: "claude-3-5-sonnet-latest",
  thread_title: "gpt-4o-mini",
  web_search: "claude-3-5-sonnet-latest",
};

export function getAgentModelName(agent: AgentName): string {
  const envKey = `AGENT_MODEL_${agent.toUpperCase()}`;
  return process.env[envKey] || DEFAULT_AGENT_MODELS[agent];
}

