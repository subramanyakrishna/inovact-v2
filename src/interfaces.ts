interface AreaOfInterstI {
  id: number;
  area: string;
}

// Done
interface UserI {
    id: number;
    cognito_sub: string;
    first_name: string;
    last_name: string;
    user_name: string;
    bio: string;
    avatar: string;
    role: "student" | "mentor" | "enterprenuer";
    email_id: string;
    designation: string;
    organization: string;
    organizational_role: string;
    university: string;
    graduation_year: Date;
    journey_start_date: Date;
    years_of_professional_experience: number;
    degree: string;
    area_of_interests: [AreaOfInterstI];
    profile_complete: boolean;
    // connections: [number]; // These numbers will be user ids

    // @TODO
    appearance: number;

    // @TODO
    percentage_growth: number; //

    website: string;
    skills: [number]; // Skill ids
    projects: [number]; // These are project ids
    ideas: [number]; // These are idea ids
    thoughts: [number]; // These are thought ids
    is_public: boolean;
    blocked_users: [number]; // User ids
    restricted_users: [number]; // User ids

    // @TODO
    // notification_settings: NotificationSetting;
}

/*
 *  Roles' Interfaces
 */
interface RoleI {
    id: number;
    name: string;
}

/*
 *  Skills' Interfaces
 */
interface SkillI {
  id: number;
  name: string;
  proficiency: "beginner" | "intermediate" | "advanced";
}

/*
 *  Documents' Interfaces
 */
interface DocumentI {
    id: number;
    name: string;
    url: string;
    mime_type: string;
}

interface ProjectDocumentI extends DocumentI {
    project_id: number;
}

interface IdeaDocumentI extends DocumentI {
    idea_id: number;
}

interface Team_DocumentI extends DocumentI {
    team_id: number;
}

/*
 *  Comments' Interfaces
 */
interface CommentI {
  text: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;

  // @TODO
  // replies: Array<Comment>;
}

interface ProjectCommentI extends CommentI {
project_id: number;
}

interface IdeaCommentI extends CommentI {
idea_id: number;
}

interface ThoughtCommentI extends CommentI {
thought_id: number;
}

/*
 *  Likes' Interfaces
 */
interface LikeI {
  user_id: number;
}

interface ProjectLikeI extends LikeI {
  project_id: number
}

interface IdeaLikeI extends LikeI {
  idea_id: number
}

/*
 *  Project Interface
 */
interface ProjectI {
    id: number;
    user_id: number; // Nothing but author
    title: string;
    description: string;
    documents: [ProjectDocumentI]; // Document ids

    // @TODO
    project_tags: [number];
    tead_id: number;
    mentions: [{ id: number, user_name: string }];
    project_status:
        | "just_started"
        | "in_progress"
        | "near_completion"
        | "completed";
    looking_for_roles: [RoleI]; // Role ids
    comments: [ProjectCommentI]
    likes: [ProjectLikeI]
    created_at: Date;
    updated_at: Date;
}

/*
 *  Idea Interface
 */
interface IdeaI {
    id: number;
    user_id: number;
    title: string;
    description: string;
    documents: [IdeaDocumentI];

    // @TODO
    idea_tags: [number];
    looking_for_team: boolean;
    looking_for_mentor: boolean;
    
    role_looking_for: [RoleI];
    comments: [IdeaCommentI]
    likes: [IdeaLikeI]
    created_at: Date;
    update_at: Date;
}

/*
 *  Idea Interface
 *  @TODO
 */
interface ThoughtI {
    thought: string;
    user_id: number;
    created_at: Date;
    update_at: Date;
    likes: [number]; // User ids
    comments: [ThoughtCommentI];
}

// @TODO
interface Notifications {
    sender_name: string;
    message: string;
    sent_timing: Date;
    //? same interface or different
}

/*
 *  Connection Interface
 *  # The Connections are full duplex
 */
interface ConnectionsI {
    id: number;
    user1: number; // User id
    user2: number; // User id
    status: "connected" | "rejected" | "pending";
}

interface RequestsI {
    id: number;
    connection_id: number;
    target_user_id: number;
}

/*
 *  Team Member Interface
 */
interface TeamMemberI {
  user_id: number;
  team_id: number;
  joined_date: Date;
  admin: boolean;
}

/*
 *  Team Invitation Interface
 *  # One of this document gets created when an admin tries to invite a new user
 *  # If user accepts an invitation, a new TeamMemberI document is created and this document is deleted
 *  # If user rejects an invitation, this document is deleted
 */
interface TeamInvitation {
  id: number;
  team_id: number;
  user_id: number;
  invited_at: number;
}

/*
 *  Team Request Interface
 *  # One of this document gets created when a user requests to join a team
 *  # If team admin accepts the request, a new TeamMemberI document is created and this request is deleted
 *  # If team admin rejects the request, this request is deleted
 */
interface TeamRequestI {
  id: number;
  team_id: number;
  user_id: number;
  requested_at: Date;
}

/*
 *  Team Interface
 */
interface TeamDataI {
  id: number;
  name: string;
  tags: [number];
  avatar: string;
  members: [TeamMemberI]
  documents: [Team_DocumentI];
  projects: [ProjectI];
  ideas: [IdeaI];
}

// TODO
// interface NotificationSetting {
//   all_notification: boolean;
//   dm_notification: boolean;
//   device_notification: boolean;
//   version_notification: boolean;
//   all_team_notfication: boolean;
//   exceptions: Array<teamData>;
//   show_mentions: boolean;
//   like_notification: boolean;
//   comments_notification: boolean;
// }

export type {
  AreaOfInterstI,
  UserI,
  RoleI,
  SkillI,
  DocumentI,
  CommentI,
  ProjectI,
  IdeaI,
  ThoughtI,
  Notifications,
  ConnectionsI,
  RequestsI,
  TeamMemberI,
  TeamInvitation,
  TeamRequestI,
  TeamDataI,
}