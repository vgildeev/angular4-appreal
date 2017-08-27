export interface User {
  avatar_url: string;
  bio?: string;
  blog?: string;
  company?: string;
  created_at?: Date;
  email?: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id?: string;
  hireable?: Boolean;
  html_url: string;
  id: number;
  location?: string;
  login: string;
  name?: string;
  organizations_url: string;
  public_gists?: number;
  public_repos?: number;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: Boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  updated_at?: Date;
  url: string;
}