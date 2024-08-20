export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      youtube_videos: {
        Row: {
          channelid: string | null;
          channeltitle: string | null;
          description: string | null;
          etag: string | null;
          kind: string | null;
          livebroadcastcontent: string | null;
          publishedat: string | null;
          publishtime: string | null;
          thumbnail_default_height: number | null;
          thumbnail_default_url: string | null;
          thumbnail_default_width: number | null;
          thumbnail_high_height: number | null;
          thumbnail_high_url: string | null;
          thumbnail_high_width: number | null;
          thumbnail_medium_height: number | null;
          thumbnail_medium_url: string | null;
          thumbnail_medium_width: number | null;
          title: string | null;
          videoid: string | null;
        };
        Insert: {
          channelid?: string | null;
          channeltitle?: string | null;
          description?: string | null;
          etag?: string | null;
          kind?: string | null;
          livebroadcastcontent?: string | null;
          publishedat?: string | null;
          publishtime?: string | null;
          thumbnail_default_height?: number | null;
          thumbnail_default_url?: string | null;
          thumbnail_default_width?: number | null;
          thumbnail_high_height?: number | null;
          thumbnail_high_url?: string | null;
          thumbnail_high_width?: number | null;
          thumbnail_medium_height?: number | null;
          thumbnail_medium_url?: string | null;
          thumbnail_medium_width?: number | null;
          title?: string | null;
          videoid?: string | null;
        };
        Update: {
          channelid?: string | null;
          channeltitle?: string | null;
          description?: string | null;
          etag?: string | null;
          kind?: string | null;
          livebroadcastcontent?: string | null;
          publishedat?: string | null;
          publishtime?: string | null;
          thumbnail_default_height?: number | null;
          thumbnail_default_url?: string | null;
          thumbnail_default_width?: number | null;
          thumbnail_high_height?: number | null;
          thumbnail_high_url?: string | null;
          thumbnail_high_width?: number | null;
          thumbnail_medium_height?: number | null;
          thumbnail_medium_url?: string | null;
          thumbnail_medium_width?: number | null;
          title?: string | null;
          videoid?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
