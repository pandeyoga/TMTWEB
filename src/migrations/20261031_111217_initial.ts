import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_status_cards_icon" AS ENUM('wifi', 'globe', 'server', 'ticket', 'scan', 'network', 'activity');
  CREATE TYPE "public"."enum_pages_hero_status_cards_tone" AS ENUM('ok', 'info');
  CREATE TYPE "public"."enum_pages_blocks_services_grid_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_bento_items_variant" AS ENUM('default', 'accent', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_bento_items_art" AS ENUM('none', 'corporate', 'branch', 'infra', 'managed');
  CREATE TYPE "public"."enum_pages_blocks_bento_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_statement_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_stats_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_logo_strip_source" AS ENUM('clients', 'partners');
  CREATE TYPE "public"."enum_pages_blocks_logo_strip_display" AS ENUM('marquee', 'grid');
  CREATE TYPE "public"."enum_pages_blocks_logo_strip_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_process_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_features_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum_pages_blocks_features_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_pages_blocks_features_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_split_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_pages_blocks_split_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_media_block_size" AS ENUM('contained', 'full');
  CREATE TYPE "public"."enum_pages_blocks_media_block_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_coverage_map_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_banner_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_pages_blocks_banner_tone" AS ENUM('navy', 'accent', 'light');
  CREATE TYPE "public"."enum_pages_blocks_faq_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_contact_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_blocks_cta_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_pages_blocks_cta_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_pages_blocks_cta_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('network', 'image', 'status', 'coverage', 'simple', 'none');
  CREATE TYPE "public"."enum_pages_hero_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_pages_hero_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_status_cards_icon" AS ENUM('wifi', 'globe', 'server', 'ticket', 'scan', 'network', 'activity');
  CREATE TYPE "public"."enum__pages_v_version_hero_status_cards_tone" AS ENUM('ok', 'info');
  CREATE TYPE "public"."enum__pages_v_blocks_services_grid_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_bento_items_variant" AS ENUM('default', 'accent', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_bento_items_art" AS ENUM('none', 'corporate', 'branch', 'infra', 'managed');
  CREATE TYPE "public"."enum__pages_v_blocks_bento_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_statement_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_logo_strip_source" AS ENUM('clients', 'partners');
  CREATE TYPE "public"."enum__pages_v_blocks_logo_strip_display" AS ENUM('marquee', 'grid');
  CREATE TYPE "public"."enum__pages_v_blocks_logo_strip_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_process_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_features_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum__pages_v_blocks_features_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__pages_v_blocks_features_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_split_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__pages_v_blocks_split_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_size" AS ENUM('contained', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_coverage_map_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_tone" AS ENUM('navy', 'accent', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('network', 'image', 'status', 'coverage', 'simple', 'none');
  CREATE TYPE "public"."enum__pages_v_version_hero_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__pages_v_version_hero_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_services_hero_status_cards_icon" AS ENUM('wifi', 'globe', 'server', 'ticket', 'scan', 'network', 'activity');
  CREATE TYPE "public"."enum_services_hero_status_cards_tone" AS ENUM('ok', 'info');
  CREATE TYPE "public"."enum_services_scope_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum_services_industries_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum_services_blocks_services_grid_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_bento_items_variant" AS ENUM('default', 'accent', 'navy');
  CREATE TYPE "public"."enum_services_blocks_bento_items_art" AS ENUM('none', 'corporate', 'branch', 'infra', 'managed');
  CREATE TYPE "public"."enum_services_blocks_bento_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_statement_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_stats_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_logo_strip_source" AS ENUM('clients', 'partners');
  CREATE TYPE "public"."enum_services_blocks_logo_strip_display" AS ENUM('marquee', 'grid');
  CREATE TYPE "public"."enum_services_blocks_logo_strip_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_process_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_features_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum_services_blocks_features_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_services_blocks_features_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_split_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_services_blocks_split_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_media_block_size" AS ENUM('contained', 'full');
  CREATE TYPE "public"."enum_services_blocks_media_block_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_coverage_map_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_banner_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_services_blocks_banner_tone" AS ENUM('navy', 'accent', 'light');
  CREATE TYPE "public"."enum_services_blocks_faq_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_services_blocks_rich_text_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_contact_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_blocks_cta_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_services_blocks_cta_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_services_blocks_cta_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum_services_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum_services_hero_type" AS ENUM('network', 'image', 'status', 'coverage', 'simple', 'none');
  CREATE TYPE "public"."enum_services_hero_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_services_hero_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_version_hero_status_cards_icon" AS ENUM('wifi', 'globe', 'server', 'ticket', 'scan', 'network', 'activity');
  CREATE TYPE "public"."enum__services_v_version_hero_status_cards_tone" AS ENUM('ok', 'info');
  CREATE TYPE "public"."enum__services_v_version_scope_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum__services_v_version_industries_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum__services_v_blocks_services_grid_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_bento_items_variant" AS ENUM('default', 'accent', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_bento_items_art" AS ENUM('none', 'corporate', 'branch', 'infra', 'managed');
  CREATE TYPE "public"."enum__services_v_blocks_bento_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_statement_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_stats_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_logo_strip_source" AS ENUM('clients', 'partners');
  CREATE TYPE "public"."enum__services_v_blocks_logo_strip_display" AS ENUM('marquee', 'grid');
  CREATE TYPE "public"."enum__services_v_blocks_logo_strip_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_process_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_features_items_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum__services_v_blocks_features_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__services_v_blocks_features_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_split_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__services_v_blocks_split_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_media_block_size" AS ENUM('contained', 'full');
  CREATE TYPE "public"."enum__services_v_blocks_media_block_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_coverage_map_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_banner_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__services_v_blocks_banner_tone" AS ENUM('navy', 'accent', 'light');
  CREATE TYPE "public"."enum__services_v_blocks_faq_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__services_v_blocks_rich_text_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_contact_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_blocks_cta_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__services_v_blocks_cta_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__services_v_blocks_cta_theme" AS ENUM('light', 'sunken', 'navy');
  CREATE TYPE "public"."enum__services_v_version_icon" AS ENUM('globe', 'activity', 'network', 'package', 'code', 'scan', 'wifi', 'server', 'building', 'shield', 'users', 'handshake', 'check', 'ticket', 'sparkles', 'target');
  CREATE TYPE "public"."enum__services_v_version_hero_type" AS ENUM('network', 'image', 'status', 'coverage', 'simple', 'none');
  CREATE TYPE "public"."enum__services_v_version_hero_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__services_v_version_hero_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_leads_status" AS ENUM('baru', 'dihubungi', 'penawaran', 'deal', 'batal');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor', 'sales');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_site_settings_socials_platform" AS ENUM('linkedin', 'instagram', 'facebook', 'youtube', 'tiktok', 'x');
  CREATE TYPE "public"."enum_header_items_link_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_header_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_footer_columns_links_link_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_chat_widget_days" AS ENUM('1', '2', '3', '4', '5', '6', '0');
  CREATE TYPE "public"."enum_chat_widget_options_action" AS ENUM('whatsapp-services', 'whatsapp', 'contact', 'url');
  CREATE TYPE "public"."enum_announcement_link_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_announcement_tone" AS ENUM('navy', 'accent');
  CREATE TYPE "public"."enum_shared_sections_cta_primary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TYPE "public"."enum_shared_sections_cta_secondary_cta_type" AS ENUM('page', 'service', 'contact', 'whatsapp', 'url');
  CREATE TABLE "pages_hero_status_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_hero_status_cards_icon" DEFAULT 'wifi',
  	"title" varchar,
  	"meta" varchar,
  	"status" varchar DEFAULT 'Online',
  	"tone" "enum_pages_hero_status_cards_tone" DEFAULT 'ok'
  );
  
  CREATE TABLE "pages_blocks_services_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Layanan Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_pages_blocks_services_grid_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_bento_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"text" varchar,
  	"variant" "enum_pages_blocks_bento_items_variant" DEFAULT 'default',
  	"art" "enum_pages_blocks_bento_items_art" DEFAULT 'none'
  );
  
  CREATE TABLE "pages_blocks_bento" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Solusi',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_pages_blocks_bento_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_statement" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"text" varchar,
  	"theme" "enum_pages_blocks_statement_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"suffix" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_pages_blocks_stats_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_logo_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"source" "enum_pages_blocks_logo_strip_source" DEFAULT 'clients',
  	"display" "enum_pages_blocks_logo_strip_display" DEFAULT 'marquee',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_pages_blocks_logo_strip_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Cara Kami Bekerja',
  	"heading" varchar,
  	"lead" varchar,
  	"use_shared" boolean DEFAULT true,
  	"theme" "enum_pages_blocks_process_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_features_items_icon",
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"columns" "enum_pages_blocks_features_columns" DEFAULT '3',
  	"numbered" boolean,
  	"theme" "enum_pages_blocks_features_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_split" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" jsonb,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_blocks_split_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"media_id" integer,
  	"reverse" boolean,
  	"theme" "enum_pages_blocks_split_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"caption" varchar,
  	"size" "enum_pages_blocks_media_block_size" DEFAULT 'contained',
  	"theme" "enum_pages_blocks_media_block_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_coverage_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'RFID Solutions',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_pages_blocks_coverage_map_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"media_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_pages_blocks_banner_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"tone" "enum_pages_blocks_banner_tone" DEFAULT 'navy',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Pertanyaan Umum',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_pages_blocks_faq_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_pages_blocks_rich_text_width" DEFAULT 'narrow',
  	"theme" "enum_pages_blocks_rich_text_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Hubungi Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_pages_blocks_contact_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"use_shared" boolean DEFAULT true,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"primary_cta_label" varchar,
  	"primary_cta_type" "enum_pages_blocks_cta_primary_cta_type" DEFAULT 'page',
  	"primary_cta_page_id" integer,
  	"primary_cta_service_id" integer,
  	"primary_cta_url" varchar,
  	"primary_cta_message" varchar,
  	"primary_cta_new_tab" boolean,
  	"secondary_cta_label" varchar,
  	"secondary_cta_type" "enum_pages_blocks_cta_secondary_cta_type" DEFAULT 'page',
  	"secondary_cta_page_id" integer,
  	"secondary_cta_service_id" integer,
  	"secondary_cta_url" varchar,
  	"secondary_cta_message" varchar,
  	"secondary_cta_new_tab" boolean,
  	"show_form" boolean DEFAULT true,
  	"theme" "enum_pages_blocks_cta_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'simple',
  	"hero_eyebrow" varchar,
  	"hero_heading" varchar,
  	"hero_lead" varchar,
  	"hero_primary_cta_label" varchar,
  	"hero_primary_cta_type" "enum_pages_hero_primary_cta_type" DEFAULT 'page',
  	"hero_primary_cta_page_id" integer,
  	"hero_primary_cta_service_id" integer,
  	"hero_primary_cta_url" varchar,
  	"hero_primary_cta_message" varchar,
  	"hero_primary_cta_new_tab" boolean,
  	"hero_secondary_cta_label" varchar,
  	"hero_secondary_cta_type" "enum_pages_hero_secondary_cta_type" DEFAULT 'page',
  	"hero_secondary_cta_page_id" integer,
  	"hero_secondary_cta_service_id" integer,
  	"hero_secondary_cta_url" varchar,
  	"hero_secondary_cta_message" varchar,
  	"hero_secondary_cta_new_tab" boolean,
  	"hero_media_id" integer,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_no_index" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_status_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_version_hero_status_cards_icon" DEFAULT 'wifi',
  	"title" varchar,
  	"meta" varchar,
  	"status" varchar DEFAULT 'Online',
  	"tone" "enum__pages_v_version_hero_status_cards_tone" DEFAULT 'ok',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Layanan Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__pages_v_blocks_services_grid_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_bento_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"text" varchar,
  	"variant" "enum__pages_v_blocks_bento_items_variant" DEFAULT 'default',
  	"art" "enum__pages_v_blocks_bento_items_art" DEFAULT 'none',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_bento" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Solusi',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__pages_v_blocks_bento_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_statement" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"text" varchar,
  	"theme" "enum__pages_v_blocks_statement_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"suffix" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__pages_v_blocks_stats_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"source" "enum__pages_v_blocks_logo_strip_source" DEFAULT 'clients',
  	"display" "enum__pages_v_blocks_logo_strip_display" DEFAULT 'marquee',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__pages_v_blocks_logo_strip_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Cara Kami Bekerja',
  	"heading" varchar,
  	"lead" varchar,
  	"use_shared" boolean DEFAULT true,
  	"theme" "enum__pages_v_blocks_process_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_features_items_icon",
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"columns" "enum__pages_v_blocks_features_columns" DEFAULT '3',
  	"numbered" boolean,
  	"theme" "enum__pages_v_blocks_features_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_split" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" jsonb,
  	"cta_label" varchar,
  	"cta_type" "enum__pages_v_blocks_split_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"media_id" integer,
  	"reverse" boolean,
  	"theme" "enum__pages_v_blocks_split_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"caption" varchar,
  	"size" "enum__pages_v_blocks_media_block_size" DEFAULT 'contained',
  	"theme" "enum__pages_v_blocks_media_block_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_coverage_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'RFID Solutions',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__pages_v_blocks_coverage_map_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"media_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum__pages_v_blocks_banner_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"tone" "enum__pages_v_blocks_banner_tone" DEFAULT 'navy',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Pertanyaan Umum',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__pages_v_blocks_faq_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__pages_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"theme" "enum__pages_v_blocks_rich_text_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Hubungi Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__pages_v_blocks_contact_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"use_shared" boolean DEFAULT true,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"primary_cta_label" varchar,
  	"primary_cta_type" "enum__pages_v_blocks_cta_primary_cta_type" DEFAULT 'page',
  	"primary_cta_page_id" integer,
  	"primary_cta_service_id" integer,
  	"primary_cta_url" varchar,
  	"primary_cta_message" varchar,
  	"primary_cta_new_tab" boolean,
  	"secondary_cta_label" varchar,
  	"secondary_cta_type" "enum__pages_v_blocks_cta_secondary_cta_type" DEFAULT 'page',
  	"secondary_cta_page_id" integer,
  	"secondary_cta_service_id" integer,
  	"secondary_cta_url" varchar,
  	"secondary_cta_message" varchar,
  	"secondary_cta_new_tab" boolean,
  	"show_form" boolean DEFAULT true,
  	"theme" "enum__pages_v_blocks_cta_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'simple',
  	"version_hero_eyebrow" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_lead" varchar,
  	"version_hero_primary_cta_label" varchar,
  	"version_hero_primary_cta_type" "enum__pages_v_version_hero_primary_cta_type" DEFAULT 'page',
  	"version_hero_primary_cta_page_id" integer,
  	"version_hero_primary_cta_service_id" integer,
  	"version_hero_primary_cta_url" varchar,
  	"version_hero_primary_cta_message" varchar,
  	"version_hero_primary_cta_new_tab" boolean,
  	"version_hero_secondary_cta_label" varchar,
  	"version_hero_secondary_cta_type" "enum__pages_v_version_hero_secondary_cta_type" DEFAULT 'page',
  	"version_hero_secondary_cta_page_id" integer,
  	"version_hero_secondary_cta_service_id" integer,
  	"version_hero_secondary_cta_url" varchar,
  	"version_hero_secondary_cta_message" varchar,
  	"version_hero_secondary_cta_new_tab" boolean,
  	"version_hero_media_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_no_index" boolean,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "services_hero_status_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_services_hero_status_cards_icon" DEFAULT 'wifi',
  	"title" varchar,
  	"meta" varchar,
  	"status" varchar DEFAULT 'Online',
  	"tone" "enum_services_hero_status_cards_tone" DEFAULT 'ok'
  );
  
  CREATE TABLE "services_scope_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_services_scope_items_icon",
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_services_industries_items_icon",
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_services_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Layanan Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_services_blocks_services_grid_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_bento_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"text" varchar,
  	"variant" "enum_services_blocks_bento_items_variant" DEFAULT 'default',
  	"art" "enum_services_blocks_bento_items_art" DEFAULT 'none'
  );
  
  CREATE TABLE "services_blocks_bento" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Solusi',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_services_blocks_bento_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_statement" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"text" varchar,
  	"theme" "enum_services_blocks_statement_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"suffix" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "services_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_services_blocks_stats_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_logo_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"source" "enum_services_blocks_logo_strip_source" DEFAULT 'clients',
  	"display" "enum_services_blocks_logo_strip_display" DEFAULT 'marquee',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_services_blocks_logo_strip_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Cara Kami Bekerja',
  	"heading" varchar,
  	"lead" varchar,
  	"use_shared" boolean DEFAULT true,
  	"theme" "enum_services_blocks_process_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_services_blocks_features_items_icon",
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"columns" "enum_services_blocks_features_columns" DEFAULT '3',
  	"numbered" boolean,
  	"theme" "enum_services_blocks_features_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_split" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" jsonb,
  	"cta_label" varchar,
  	"cta_type" "enum_services_blocks_split_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"media_id" integer,
  	"reverse" boolean,
  	"theme" "enum_services_blocks_split_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"caption" varchar,
  	"size" "enum_services_blocks_media_block_size" DEFAULT 'contained',
  	"theme" "enum_services_blocks_media_block_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_coverage_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'RFID Solutions',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_services_blocks_coverage_map_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"media_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum_services_blocks_banner_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"tone" "enum_services_blocks_banner_tone" DEFAULT 'navy',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Pertanyaan Umum',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_services_blocks_faq_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum_services_blocks_rich_text_width" DEFAULT 'narrow',
  	"theme" "enum_services_blocks_rich_text_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Hubungi Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum_services_blocks_contact_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"use_shared" boolean DEFAULT true,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"primary_cta_label" varchar,
  	"primary_cta_type" "enum_services_blocks_cta_primary_cta_type" DEFAULT 'page',
  	"primary_cta_page_id" integer,
  	"primary_cta_service_id" integer,
  	"primary_cta_url" varchar,
  	"primary_cta_message" varchar,
  	"primary_cta_new_tab" boolean,
  	"secondary_cta_label" varchar,
  	"secondary_cta_type" "enum_services_blocks_cta_secondary_cta_type" DEFAULT 'page',
  	"secondary_cta_page_id" integer,
  	"secondary_cta_service_id" integer,
  	"secondary_cta_url" varchar,
  	"secondary_cta_message" varchar,
  	"secondary_cta_new_tab" boolean,
  	"show_form" boolean DEFAULT true,
  	"theme" "enum_services_blocks_cta_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"tagline" varchar,
  	"icon" "enum_services_icon",
  	"order" numeric DEFAULT 10,
  	"excerpt" varchar,
  	"hero_type" "enum_services_hero_type" DEFAULT 'simple',
  	"hero_eyebrow" varchar,
  	"hero_heading" varchar,
  	"hero_lead" varchar,
  	"hero_primary_cta_label" varchar,
  	"hero_primary_cta_type" "enum_services_hero_primary_cta_type" DEFAULT 'page',
  	"hero_primary_cta_page_id" integer,
  	"hero_primary_cta_service_id" integer,
  	"hero_primary_cta_url" varchar,
  	"hero_primary_cta_message" varchar,
  	"hero_primary_cta_new_tab" boolean,
  	"hero_secondary_cta_label" varchar,
  	"hero_secondary_cta_type" "enum_services_hero_secondary_cta_type" DEFAULT 'page',
  	"hero_secondary_cta_page_id" integer,
  	"hero_secondary_cta_service_id" integer,
  	"hero_secondary_cta_url" varchar,
  	"hero_secondary_cta_message" varchar,
  	"hero_secondary_cta_new_tab" boolean,
  	"hero_media_id" integer,
  	"scope_eyebrow" varchar DEFAULT 'Cakupan Layanan',
  	"scope_heading" varchar,
  	"scope_lead" varchar,
  	"industries_eyebrow" varchar DEFAULT 'Cocok Untuk',
  	"industries_heading" varchar,
  	"industries_lead" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_no_index" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "_services_v_version_hero_status_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__services_v_version_hero_status_cards_icon" DEFAULT 'wifi',
  	"title" varchar,
  	"meta" varchar,
  	"status" varchar DEFAULT 'Online',
  	"tone" "enum__services_v_version_hero_status_cards_tone" DEFAULT 'ok',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_scope_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__services_v_version_scope_items_icon",
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_industries_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__services_v_version_industries_items_icon",
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_services_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Layanan Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__services_v_blocks_services_grid_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_bento_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"text" varchar,
  	"variant" "enum__services_v_blocks_bento_items_variant" DEFAULT 'default',
  	"art" "enum__services_v_blocks_bento_items_art" DEFAULT 'none',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_bento" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Solusi',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__services_v_blocks_bento_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_statement" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"text" varchar,
  	"theme" "enum__services_v_blocks_statement_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_stats_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"suffix" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__services_v_blocks_stats_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_logo_strip" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"source" "enum__services_v_blocks_logo_strip_source" DEFAULT 'clients',
  	"display" "enum__services_v_blocks_logo_strip_display" DEFAULT 'marquee',
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__services_v_blocks_logo_strip_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Cara Kami Bekerja',
  	"heading" varchar,
  	"lead" varchar,
  	"use_shared" boolean DEFAULT true,
  	"theme" "enum__services_v_blocks_process_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__services_v_blocks_features_items_icon",
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"columns" "enum__services_v_blocks_features_columns" DEFAULT '3',
  	"numbered" boolean,
  	"theme" "enum__services_v_blocks_features_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_split" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" jsonb,
  	"cta_label" varchar,
  	"cta_type" "enum__services_v_blocks_split_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"media_id" integer,
  	"reverse" boolean,
  	"theme" "enum__services_v_blocks_split_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"caption" varchar,
  	"size" "enum__services_v_blocks_media_block_size" DEFAULT 'contained',
  	"theme" "enum__services_v_blocks_media_block_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_coverage_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'RFID Solutions',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__services_v_blocks_coverage_map_theme" DEFAULT 'sunken',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"media_id" integer,
  	"cta_label" varchar,
  	"cta_type" "enum__services_v_blocks_banner_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"tone" "enum__services_v_blocks_banner_tone" DEFAULT 'navy',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Pertanyaan Umum',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__services_v_blocks_faq_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"width" "enum__services_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"theme" "enum__services_v_blocks_rich_text_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Hubungi Kami',
  	"heading" varchar,
  	"lead" varchar,
  	"theme" "enum__services_v_blocks_contact_theme" DEFAULT 'light',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"use_shared" boolean DEFAULT true,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"primary_cta_label" varchar,
  	"primary_cta_type" "enum__services_v_blocks_cta_primary_cta_type" DEFAULT 'page',
  	"primary_cta_page_id" integer,
  	"primary_cta_service_id" integer,
  	"primary_cta_url" varchar,
  	"primary_cta_message" varchar,
  	"primary_cta_new_tab" boolean,
  	"secondary_cta_label" varchar,
  	"secondary_cta_type" "enum__services_v_blocks_cta_secondary_cta_type" DEFAULT 'page',
  	"secondary_cta_page_id" integer,
  	"secondary_cta_service_id" integer,
  	"secondary_cta_url" varchar,
  	"secondary_cta_message" varchar,
  	"secondary_cta_new_tab" boolean,
  	"show_form" boolean DEFAULT true,
  	"theme" "enum__services_v_blocks_cta_theme" DEFAULT 'navy',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_tagline" varchar,
  	"version_icon" "enum__services_v_version_icon",
  	"version_order" numeric DEFAULT 10,
  	"version_excerpt" varchar,
  	"version_hero_type" "enum__services_v_version_hero_type" DEFAULT 'simple',
  	"version_hero_eyebrow" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_lead" varchar,
  	"version_hero_primary_cta_label" varchar,
  	"version_hero_primary_cta_type" "enum__services_v_version_hero_primary_cta_type" DEFAULT 'page',
  	"version_hero_primary_cta_page_id" integer,
  	"version_hero_primary_cta_service_id" integer,
  	"version_hero_primary_cta_url" varchar,
  	"version_hero_primary_cta_message" varchar,
  	"version_hero_primary_cta_new_tab" boolean,
  	"version_hero_secondary_cta_label" varchar,
  	"version_hero_secondary_cta_type" "enum__services_v_version_hero_secondary_cta_type" DEFAULT 'page',
  	"version_hero_secondary_cta_page_id" integer,
  	"version_hero_secondary_cta_service_id" integer,
  	"version_hero_secondary_cta_url" varchar,
  	"version_hero_secondary_cta_message" varchar,
  	"version_hero_secondary_cta_new_tab" boolean,
  	"version_hero_media_id" integer,
  	"version_scope_eyebrow" varchar DEFAULT 'Cakupan Layanan',
  	"version_scope_heading" varchar,
  	"version_scope_lead" varchar,
  	"version_industries_eyebrow" varchar DEFAULT 'Cocok Untuk',
  	"version_industries_heading" varchar,
  	"version_industries_lead" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_no_index" boolean,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_services_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"faqs_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "clients" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer,
  	"website" varchar,
  	"order" numeric DEFAULT 10,
  	"visible" boolean DEFAULT true,
  	"permission" boolean,
  	"industry" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "partners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer,
  	"website" varchar,
  	"order" numeric DEFAULT 10,
  	"visible" boolean DEFAULT true,
  	"official" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"general" boolean DEFAULT true,
  	"order" numeric DEFAULT 10,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "leads" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"company" varchar,
  	"whatsapp" varchar NOT NULL,
  	"email" varchar,
  	"service" varchar,
  	"message" varchar,
  	"status" "enum_leads_status" DEFAULT 'baru',
  	"notes" varchar,
  	"source_page" varchar,
  	"consent" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"media_id" integer,
  	"clients_id" integer,
  	"partners_id" integer,
  	"faqs_id" integer,
  	"leads_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_site_settings_socials_platform",
  	"url" varchar
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar DEFAULT 'PT Triyasa Mitra Teknologi' NOT NULL,
  	"tagline" varchar DEFAULT 'Connecting Technology, Empowering Business',
  	"logo_id" integer,
  	"logo_on_dark_id" integer,
  	"logo_height" numeric DEFAULT 40,
  	"whatsapp_number" varchar,
  	"phone" varchar,
  	"whatsapp_message" varchar DEFAULT 'Halo Tim Triyasa, saya ingin konsultasi kebutuhan IT perusahaan kami.',
  	"email" varchar,
  	"address" varchar,
  	"maps_url" varchar,
  	"hours" varchar DEFAULT 'Senin–Jumat, 08.00–17.00 WIB',
  	"site_url" varchar,
  	"default_description" varchar,
  	"og_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar NOT NULL,
  	"link_type" "enum_header_items_link_type" DEFAULT 'page',
  	"link_page_id" integer,
  	"link_service_id" integer,
  	"link_url" varchar,
  	"link_message" varchar,
  	"link_new_tab" boolean,
  	"show_services" boolean
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_label" varchar,
  	"cta_type" "enum_header_cta_type" DEFAULT 'page',
  	"cta_page_id" integer,
  	"cta_service_id" integer,
  	"cta_url" varchar,
  	"cta_message" varchar,
  	"cta_new_tab" boolean,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar NOT NULL,
  	"link_type" "enum_footer_columns_links_link_type" DEFAULT 'page',
  	"link_page_id" integer,
  	"link_service_id" integer,
  	"link_url" varchar,
  	"link_message" varchar,
  	"link_new_tab" boolean
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"auto_services" boolean
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"about" varchar,
  	"bottom_note" varchar DEFAULT 'Connecting Technology, Empowering Business',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "chat_widget_days" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_chat_widget_days",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "chat_widget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"action" "enum_chat_widget_options_action" DEFAULT 'whatsapp',
  	"description" varchar,
  	"message" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "chat_widget" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"button_label" varchar DEFAULT 'Butuh bantuan?',
  	"title" varchar DEFAULT 'Tim Triyasa',
  	"response_time" varchar DEFAULT 'Biasanya membalas dalam 1 jam kerja',
  	"greeting" varchar DEFAULT 'Halo, ada yang bisa kami bantu?',
  	"open_time" varchar DEFAULT '08:00',
  	"close_time" varchar DEFAULT '17:00',
  	"offline_message" varchar DEFAULT 'Kami sedang di luar jam kerja. Pesan Anda tetap kami balas pada jam kerja berikutnya.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "announcement" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT false,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_announcement_link_type" DEFAULT 'page',
  	"link_page_id" integer,
  	"link_service_id" integer,
  	"link_url" varchar,
  	"link_message" varchar,
  	"link_new_tab" boolean,
  	"tone" "enum_announcement_tone" DEFAULT 'navy',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "shared_sections_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "shared_sections" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_eyebrow" varchar DEFAULT 'Mulai Konsultasi',
  	"cta_heading" varchar,
  	"cta_lead" varchar,
  	"cta_primary_cta_label" varchar,
  	"cta_primary_cta_type" "enum_shared_sections_cta_primary_cta_type" DEFAULT 'page',
  	"cta_primary_cta_page_id" integer,
  	"cta_primary_cta_service_id" integer,
  	"cta_primary_cta_url" varchar,
  	"cta_primary_cta_message" varchar,
  	"cta_primary_cta_new_tab" boolean,
  	"cta_secondary_cta_label" varchar,
  	"cta_secondary_cta_type" "enum_shared_sections_cta_secondary_cta_type" DEFAULT 'page',
  	"cta_secondary_cta_page_id" integer,
  	"cta_secondary_cta_service_id" integer,
  	"cta_secondary_cta_url" varchar,
  	"cta_secondary_cta_message" varchar,
  	"cta_secondary_cta_new_tab" boolean,
  	"form_submit_label" varchar DEFAULT 'Kirim Permintaan',
  	"form_success_message" varchar DEFAULT 'Terima kasih, tim kami akan menghubungi Anda melalui WhatsApp pada jam kerja berikutnya.',
  	"form_consent_text" varchar DEFAULT 'Saya setuju data ini dipakai untuk menghubungi saya sesuai Kebijakan Privasi.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_hero_status_cards" ADD CONSTRAINT "pages_hero_status_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services_grid" ADD CONSTRAINT "pages_blocks_services_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_bento_items" ADD CONSTRAINT "pages_blocks_bento_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_bento" ADD CONSTRAINT "pages_blocks_bento_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_statement" ADD CONSTRAINT "pages_blocks_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_items" ADD CONSTRAINT "pages_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats" ADD CONSTRAINT "pages_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_strip" ADD CONSTRAINT "pages_blocks_logo_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps" ADD CONSTRAINT "pages_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process" ADD CONSTRAINT "pages_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_items" ADD CONSTRAINT "pages_blocks_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features" ADD CONSTRAINT "pages_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_split" ADD CONSTRAINT "pages_blocks_split_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_split" ADD CONSTRAINT "pages_blocks_split_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_split" ADD CONSTRAINT "pages_blocks_split_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_split" ADD CONSTRAINT "pages_blocks_split_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_coverage_map" ADD CONSTRAINT "pages_blocks_coverage_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_primary_cta_service_id_services_id_fk" FOREIGN KEY ("primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("hero_primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_primary_cta_service_id_services_id_fk" FOREIGN KEY ("hero_primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("hero_secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("hero_secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_status_cards" ADD CONSTRAINT "_pages_v_version_hero_status_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services_grid" ADD CONSTRAINT "_pages_v_blocks_services_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_bento_items" ADD CONSTRAINT "_pages_v_blocks_bento_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_bento" ADD CONSTRAINT "_pages_v_blocks_bento_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_statement" ADD CONSTRAINT "_pages_v_blocks_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_items" ADD CONSTRAINT "_pages_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats" ADD CONSTRAINT "_pages_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_strip" ADD CONSTRAINT "_pages_v_blocks_logo_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps" ADD CONSTRAINT "_pages_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process" ADD CONSTRAINT "_pages_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_items" ADD CONSTRAINT "_pages_v_blocks_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features" ADD CONSTRAINT "_pages_v_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_split" ADD CONSTRAINT "_pages_v_blocks_split_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_split" ADD CONSTRAINT "_pages_v_blocks_split_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_split" ADD CONSTRAINT "_pages_v_blocks_split_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_split" ADD CONSTRAINT "_pages_v_blocks_split_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_coverage_map" ADD CONSTRAINT "_pages_v_blocks_coverage_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact" ADD CONSTRAINT "_pages_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_primary_cta_service_id_services_id_fk" FOREIGN KEY ("primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("version_hero_primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_primary_cta_service_id_services_id_fk" FOREIGN KEY ("version_hero_primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("version_hero_secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("version_hero_secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_hero_status_cards" ADD CONSTRAINT "services_hero_status_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_scope_items" ADD CONSTRAINT "services_scope_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_industries_items" ADD CONSTRAINT "services_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_services_grid" ADD CONSTRAINT "services_blocks_services_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_bento_items" ADD CONSTRAINT "services_blocks_bento_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_bento" ADD CONSTRAINT "services_blocks_bento_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_statement" ADD CONSTRAINT "services_blocks_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_stats_items" ADD CONSTRAINT "services_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_stats" ADD CONSTRAINT "services_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_logo_strip" ADD CONSTRAINT "services_blocks_logo_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_process_steps" ADD CONSTRAINT "services_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_process" ADD CONSTRAINT "services_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_features_items" ADD CONSTRAINT "services_blocks_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_features" ADD CONSTRAINT "services_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_split" ADD CONSTRAINT "services_blocks_split_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_split" ADD CONSTRAINT "services_blocks_split_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_split" ADD CONSTRAINT "services_blocks_split_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_split" ADD CONSTRAINT "services_blocks_split_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_media_block" ADD CONSTRAINT "services_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_media_block" ADD CONSTRAINT "services_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_coverage_map" ADD CONSTRAINT "services_blocks_coverage_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_banner" ADD CONSTRAINT "services_blocks_banner_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_banner" ADD CONSTRAINT "services_blocks_banner_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_banner" ADD CONSTRAINT "services_blocks_banner_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_banner" ADD CONSTRAINT "services_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_faq" ADD CONSTRAINT "services_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_rich_text" ADD CONSTRAINT "services_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_contact" ADD CONSTRAINT "services_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_primary_cta_service_id_services_id_fk" FOREIGN KEY ("primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("hero_primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_primary_cta_service_id_services_id_fk" FOREIGN KEY ("hero_primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("hero_secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("hero_secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_hero_status_cards" ADD CONSTRAINT "_services_v_version_hero_status_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_scope_items" ADD CONSTRAINT "_services_v_version_scope_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_industries_items" ADD CONSTRAINT "_services_v_version_industries_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_services_grid" ADD CONSTRAINT "_services_v_blocks_services_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_bento_items" ADD CONSTRAINT "_services_v_blocks_bento_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_bento"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_bento" ADD CONSTRAINT "_services_v_blocks_bento_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_statement" ADD CONSTRAINT "_services_v_blocks_statement_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_stats_items" ADD CONSTRAINT "_services_v_blocks_stats_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_stats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_stats" ADD CONSTRAINT "_services_v_blocks_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_logo_strip" ADD CONSTRAINT "_services_v_blocks_logo_strip_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_process_steps" ADD CONSTRAINT "_services_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_process" ADD CONSTRAINT "_services_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_features_items" ADD CONSTRAINT "_services_v_blocks_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_features" ADD CONSTRAINT "_services_v_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_split" ADD CONSTRAINT "_services_v_blocks_split_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_split" ADD CONSTRAINT "_services_v_blocks_split_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_split" ADD CONSTRAINT "_services_v_blocks_split_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_split" ADD CONSTRAINT "_services_v_blocks_split_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_media_block" ADD CONSTRAINT "_services_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_media_block" ADD CONSTRAINT "_services_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_coverage_map" ADD CONSTRAINT "_services_v_blocks_coverage_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_banner" ADD CONSTRAINT "_services_v_blocks_banner_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_banner" ADD CONSTRAINT "_services_v_blocks_banner_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_banner" ADD CONSTRAINT "_services_v_blocks_banner_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_banner" ADD CONSTRAINT "_services_v_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_faq" ADD CONSTRAINT "_services_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_rich_text" ADD CONSTRAINT "_services_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_contact" ADD CONSTRAINT "_services_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_primary_cta_service_id_services_id_fk" FOREIGN KEY ("primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("version_hero_primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_primary_cta_service_id_services_id_fk" FOREIGN KEY ("version_hero_primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("version_hero_secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("version_hero_secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "partners" ADD CONSTRAINT "partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_clients_fk" FOREIGN KEY ("clients_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_fk" FOREIGN KEY ("leads_id") REFERENCES "public"."leads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_socials" ADD CONSTRAINT "site_settings_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_on_dark_id_media_id_fk" FOREIGN KEY ("logo_on_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_og_image_id_media_id_fk" FOREIGN KEY ("og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_items" ADD CONSTRAINT "header_items_link_page_id_pages_id_fk" FOREIGN KEY ("link_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_items" ADD CONSTRAINT "header_items_link_service_id_services_id_fk" FOREIGN KEY ("link_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_items" ADD CONSTRAINT "header_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_cta_service_id_services_id_fk" FOREIGN KEY ("cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_link_page_id_pages_id_fk" FOREIGN KEY ("link_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_link_service_id_services_id_fk" FOREIGN KEY ("link_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chat_widget_days" ADD CONSTRAINT "chat_widget_days_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."chat_widget"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chat_widget_options" ADD CONSTRAINT "chat_widget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chat_widget"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "announcement" ADD CONSTRAINT "announcement_link_page_id_pages_id_fk" FOREIGN KEY ("link_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "announcement" ADD CONSTRAINT "announcement_link_service_id_services_id_fk" FOREIGN KEY ("link_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "shared_sections_process" ADD CONSTRAINT "shared_sections_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."shared_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "shared_sections" ADD CONSTRAINT "shared_sections_cta_primary_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_primary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "shared_sections" ADD CONSTRAINT "shared_sections_cta_primary_cta_service_id_services_id_fk" FOREIGN KEY ("cta_primary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "shared_sections" ADD CONSTRAINT "shared_sections_cta_secondary_cta_page_id_pages_id_fk" FOREIGN KEY ("cta_secondary_cta_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "shared_sections" ADD CONSTRAINT "shared_sections_cta_secondary_cta_service_id_services_id_fk" FOREIGN KEY ("cta_secondary_cta_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_status_cards_order_idx" ON "pages_hero_status_cards" USING btree ("_order");
  CREATE INDEX "pages_hero_status_cards_parent_id_idx" ON "pages_hero_status_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_grid_order_idx" ON "pages_blocks_services_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_grid_parent_id_idx" ON "pages_blocks_services_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_grid_path_idx" ON "pages_blocks_services_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_bento_items_order_idx" ON "pages_blocks_bento_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_bento_items_parent_id_idx" ON "pages_blocks_bento_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_bento_order_idx" ON "pages_blocks_bento" USING btree ("_order");
  CREATE INDEX "pages_blocks_bento_parent_id_idx" ON "pages_blocks_bento" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_bento_path_idx" ON "pages_blocks_bento" USING btree ("_path");
  CREATE INDEX "pages_blocks_statement_order_idx" ON "pages_blocks_statement" USING btree ("_order");
  CREATE INDEX "pages_blocks_statement_parent_id_idx" ON "pages_blocks_statement" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_statement_path_idx" ON "pages_blocks_statement" USING btree ("_path");
  CREATE INDEX "pages_blocks_stats_items_order_idx" ON "pages_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_items_parent_id_idx" ON "pages_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_order_idx" ON "pages_blocks_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_parent_id_idx" ON "pages_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_path_idx" ON "pages_blocks_stats" USING btree ("_path");
  CREATE INDEX "pages_blocks_logo_strip_order_idx" ON "pages_blocks_logo_strip" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_strip_parent_id_idx" ON "pages_blocks_logo_strip" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_strip_path_idx" ON "pages_blocks_logo_strip" USING btree ("_path");
  CREATE INDEX "pages_blocks_process_steps_order_idx" ON "pages_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_parent_id_idx" ON "pages_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_order_idx" ON "pages_blocks_process" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_parent_id_idx" ON "pages_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_path_idx" ON "pages_blocks_process" USING btree ("_path");
  CREATE INDEX "pages_blocks_features_items_order_idx" ON "pages_blocks_features_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_items_parent_id_idx" ON "pages_blocks_features_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_order_idx" ON "pages_blocks_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_parent_id_idx" ON "pages_blocks_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_path_idx" ON "pages_blocks_features" USING btree ("_path");
  CREATE INDEX "pages_blocks_split_order_idx" ON "pages_blocks_split" USING btree ("_order");
  CREATE INDEX "pages_blocks_split_parent_id_idx" ON "pages_blocks_split" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_split_path_idx" ON "pages_blocks_split" USING btree ("_path");
  CREATE INDEX "pages_blocks_split_cta_cta_page_idx" ON "pages_blocks_split" USING btree ("cta_page_id");
  CREATE INDEX "pages_blocks_split_cta_cta_service_idx" ON "pages_blocks_split" USING btree ("cta_service_id");
  CREATE INDEX "pages_blocks_split_media_idx" ON "pages_blocks_split" USING btree ("media_id");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_coverage_map_order_idx" ON "pages_blocks_coverage_map" USING btree ("_order");
  CREATE INDEX "pages_blocks_coverage_map_parent_id_idx" ON "pages_blocks_coverage_map" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_coverage_map_path_idx" ON "pages_blocks_coverage_map" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner_order_idx" ON "pages_blocks_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner_parent_id_idx" ON "pages_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner_path_idx" ON "pages_blocks_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner_media_idx" ON "pages_blocks_banner" USING btree ("media_id");
  CREATE INDEX "pages_blocks_banner_cta_cta_page_idx" ON "pages_blocks_banner" USING btree ("cta_page_id");
  CREATE INDEX "pages_blocks_banner_cta_cta_service_idx" ON "pages_blocks_banner" USING btree ("cta_service_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_primary_cta_primary_cta_page_idx" ON "pages_blocks_cta" USING btree ("primary_cta_page_id");
  CREATE INDEX "pages_blocks_cta_primary_cta_primary_cta_service_idx" ON "pages_blocks_cta" USING btree ("primary_cta_service_id");
  CREATE INDEX "pages_blocks_cta_secondary_cta_secondary_cta_page_idx" ON "pages_blocks_cta" USING btree ("secondary_cta_page_id");
  CREATE INDEX "pages_blocks_cta_secondary_cta_secondary_cta_service_idx" ON "pages_blocks_cta" USING btree ("secondary_cta_service_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_hero_primary_cta_hero_primary_cta_page_idx" ON "pages" USING btree ("hero_primary_cta_page_id");
  CREATE INDEX "pages_hero_primary_cta_hero_primary_cta_service_idx" ON "pages" USING btree ("hero_primary_cta_service_id");
  CREATE INDEX "pages_hero_secondary_cta_hero_secondary_cta_page_idx" ON "pages" USING btree ("hero_secondary_cta_page_id");
  CREATE INDEX "pages_hero_secondary_cta_hero_secondary_cta_service_idx" ON "pages" USING btree ("hero_secondary_cta_service_id");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_services_id_idx" ON "pages_rels" USING btree ("services_id");
  CREATE INDEX "pages_rels_faqs_id_idx" ON "pages_rels" USING btree ("faqs_id");
  CREATE INDEX "_pages_v_version_hero_status_cards_order_idx" ON "_pages_v_version_hero_status_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_status_cards_parent_id_idx" ON "_pages_v_version_hero_status_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_grid_order_idx" ON "_pages_v_blocks_services_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_grid_parent_id_idx" ON "_pages_v_blocks_services_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_grid_path_idx" ON "_pages_v_blocks_services_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_bento_items_order_idx" ON "_pages_v_blocks_bento_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_bento_items_parent_id_idx" ON "_pages_v_blocks_bento_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_bento_order_idx" ON "_pages_v_blocks_bento" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_bento_parent_id_idx" ON "_pages_v_blocks_bento" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_bento_path_idx" ON "_pages_v_blocks_bento" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_statement_order_idx" ON "_pages_v_blocks_statement" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_statement_parent_id_idx" ON "_pages_v_blocks_statement" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_statement_path_idx" ON "_pages_v_blocks_statement" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_stats_items_order_idx" ON "_pages_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_items_parent_id_idx" ON "_pages_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_order_idx" ON "_pages_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_parent_id_idx" ON "_pages_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_path_idx" ON "_pages_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_logo_strip_order_idx" ON "_pages_v_blocks_logo_strip" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_strip_parent_id_idx" ON "_pages_v_blocks_logo_strip" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_strip_path_idx" ON "_pages_v_blocks_logo_strip" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_process_steps_order_idx" ON "_pages_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_steps_parent_id_idx" ON "_pages_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_order_idx" ON "_pages_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_parent_id_idx" ON "_pages_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_path_idx" ON "_pages_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_features_items_order_idx" ON "_pages_v_blocks_features_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_items_parent_id_idx" ON "_pages_v_blocks_features_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_order_idx" ON "_pages_v_blocks_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_parent_id_idx" ON "_pages_v_blocks_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_path_idx" ON "_pages_v_blocks_features" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_split_order_idx" ON "_pages_v_blocks_split" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_split_parent_id_idx" ON "_pages_v_blocks_split" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_split_path_idx" ON "_pages_v_blocks_split" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_split_cta_cta_page_idx" ON "_pages_v_blocks_split" USING btree ("cta_page_id");
  CREATE INDEX "_pages_v_blocks_split_cta_cta_service_idx" ON "_pages_v_blocks_split" USING btree ("cta_service_id");
  CREATE INDEX "_pages_v_blocks_split_media_idx" ON "_pages_v_blocks_split" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_coverage_map_order_idx" ON "_pages_v_blocks_coverage_map" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_coverage_map_parent_id_idx" ON "_pages_v_blocks_coverage_map" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_coverage_map_path_idx" ON "_pages_v_blocks_coverage_map" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner_order_idx" ON "_pages_v_blocks_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner_parent_id_idx" ON "_pages_v_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner_path_idx" ON "_pages_v_blocks_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner_media_idx" ON "_pages_v_blocks_banner" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_banner_cta_cta_page_idx" ON "_pages_v_blocks_banner" USING btree ("cta_page_id");
  CREATE INDEX "_pages_v_blocks_banner_cta_cta_service_idx" ON "_pages_v_blocks_banner" USING btree ("cta_service_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_order_idx" ON "_pages_v_blocks_contact" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_parent_id_idx" ON "_pages_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_path_idx" ON "_pages_v_blocks_contact" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_primary_cta_primary_cta_page_idx" ON "_pages_v_blocks_cta" USING btree ("primary_cta_page_id");
  CREATE INDEX "_pages_v_blocks_cta_primary_cta_primary_cta_service_idx" ON "_pages_v_blocks_cta" USING btree ("primary_cta_service_id");
  CREATE INDEX "_pages_v_blocks_cta_secondary_cta_secondary_cta_page_idx" ON "_pages_v_blocks_cta" USING btree ("secondary_cta_page_id");
  CREATE INDEX "_pages_v_blocks_cta_secondary_cta_secondary_cta_service_idx" ON "_pages_v_blocks_cta" USING btree ("secondary_cta_service_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_hero_primary_cta_version_hero_primary_c_idx" ON "_pages_v" USING btree ("version_hero_primary_cta_page_id");
  CREATE INDEX "_pages_v_version_hero_primary_cta_version_hero_primary_1_idx" ON "_pages_v" USING btree ("version_hero_primary_cta_service_id");
  CREATE INDEX "_pages_v_version_hero_secondary_cta_version_hero_seconda_idx" ON "_pages_v" USING btree ("version_hero_secondary_cta_page_id");
  CREATE INDEX "_pages_v_version_hero_secondary_cta_version_hero_secon_1_idx" ON "_pages_v" USING btree ("version_hero_secondary_cta_service_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_services_id_idx" ON "_pages_v_rels" USING btree ("services_id");
  CREATE INDEX "_pages_v_rels_faqs_id_idx" ON "_pages_v_rels" USING btree ("faqs_id");
  CREATE INDEX "services_hero_status_cards_order_idx" ON "services_hero_status_cards" USING btree ("_order");
  CREATE INDEX "services_hero_status_cards_parent_id_idx" ON "services_hero_status_cards" USING btree ("_parent_id");
  CREATE INDEX "services_scope_items_order_idx" ON "services_scope_items" USING btree ("_order");
  CREATE INDEX "services_scope_items_parent_id_idx" ON "services_scope_items" USING btree ("_parent_id");
  CREATE INDEX "services_industries_items_order_idx" ON "services_industries_items" USING btree ("_order");
  CREATE INDEX "services_industries_items_parent_id_idx" ON "services_industries_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_grid_order_idx" ON "services_blocks_services_grid" USING btree ("_order");
  CREATE INDEX "services_blocks_services_grid_parent_id_idx" ON "services_blocks_services_grid" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_services_grid_path_idx" ON "services_blocks_services_grid" USING btree ("_path");
  CREATE INDEX "services_blocks_bento_items_order_idx" ON "services_blocks_bento_items" USING btree ("_order");
  CREATE INDEX "services_blocks_bento_items_parent_id_idx" ON "services_blocks_bento_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_bento_order_idx" ON "services_blocks_bento" USING btree ("_order");
  CREATE INDEX "services_blocks_bento_parent_id_idx" ON "services_blocks_bento" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_bento_path_idx" ON "services_blocks_bento" USING btree ("_path");
  CREATE INDEX "services_blocks_statement_order_idx" ON "services_blocks_statement" USING btree ("_order");
  CREATE INDEX "services_blocks_statement_parent_id_idx" ON "services_blocks_statement" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_statement_path_idx" ON "services_blocks_statement" USING btree ("_path");
  CREATE INDEX "services_blocks_stats_items_order_idx" ON "services_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "services_blocks_stats_items_parent_id_idx" ON "services_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_stats_order_idx" ON "services_blocks_stats" USING btree ("_order");
  CREATE INDEX "services_blocks_stats_parent_id_idx" ON "services_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_stats_path_idx" ON "services_blocks_stats" USING btree ("_path");
  CREATE INDEX "services_blocks_logo_strip_order_idx" ON "services_blocks_logo_strip" USING btree ("_order");
  CREATE INDEX "services_blocks_logo_strip_parent_id_idx" ON "services_blocks_logo_strip" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_logo_strip_path_idx" ON "services_blocks_logo_strip" USING btree ("_path");
  CREATE INDEX "services_blocks_process_steps_order_idx" ON "services_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "services_blocks_process_steps_parent_id_idx" ON "services_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_process_order_idx" ON "services_blocks_process" USING btree ("_order");
  CREATE INDEX "services_blocks_process_parent_id_idx" ON "services_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_process_path_idx" ON "services_blocks_process" USING btree ("_path");
  CREATE INDEX "services_blocks_features_items_order_idx" ON "services_blocks_features_items" USING btree ("_order");
  CREATE INDEX "services_blocks_features_items_parent_id_idx" ON "services_blocks_features_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_features_order_idx" ON "services_blocks_features" USING btree ("_order");
  CREATE INDEX "services_blocks_features_parent_id_idx" ON "services_blocks_features" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_features_path_idx" ON "services_blocks_features" USING btree ("_path");
  CREATE INDEX "services_blocks_split_order_idx" ON "services_blocks_split" USING btree ("_order");
  CREATE INDEX "services_blocks_split_parent_id_idx" ON "services_blocks_split" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_split_path_idx" ON "services_blocks_split" USING btree ("_path");
  CREATE INDEX "services_blocks_split_cta_cta_page_idx" ON "services_blocks_split" USING btree ("cta_page_id");
  CREATE INDEX "services_blocks_split_cta_cta_service_idx" ON "services_blocks_split" USING btree ("cta_service_id");
  CREATE INDEX "services_blocks_split_media_idx" ON "services_blocks_split" USING btree ("media_id");
  CREATE INDEX "services_blocks_media_block_order_idx" ON "services_blocks_media_block" USING btree ("_order");
  CREATE INDEX "services_blocks_media_block_parent_id_idx" ON "services_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_media_block_path_idx" ON "services_blocks_media_block" USING btree ("_path");
  CREATE INDEX "services_blocks_media_block_media_idx" ON "services_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "services_blocks_coverage_map_order_idx" ON "services_blocks_coverage_map" USING btree ("_order");
  CREATE INDEX "services_blocks_coverage_map_parent_id_idx" ON "services_blocks_coverage_map" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_coverage_map_path_idx" ON "services_blocks_coverage_map" USING btree ("_path");
  CREATE INDEX "services_blocks_banner_order_idx" ON "services_blocks_banner" USING btree ("_order");
  CREATE INDEX "services_blocks_banner_parent_id_idx" ON "services_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_banner_path_idx" ON "services_blocks_banner" USING btree ("_path");
  CREATE INDEX "services_blocks_banner_media_idx" ON "services_blocks_banner" USING btree ("media_id");
  CREATE INDEX "services_blocks_banner_cta_cta_page_idx" ON "services_blocks_banner" USING btree ("cta_page_id");
  CREATE INDEX "services_blocks_banner_cta_cta_service_idx" ON "services_blocks_banner" USING btree ("cta_service_id");
  CREATE INDEX "services_blocks_faq_order_idx" ON "services_blocks_faq" USING btree ("_order");
  CREATE INDEX "services_blocks_faq_parent_id_idx" ON "services_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_faq_path_idx" ON "services_blocks_faq" USING btree ("_path");
  CREATE INDEX "services_blocks_rich_text_order_idx" ON "services_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "services_blocks_rich_text_parent_id_idx" ON "services_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_rich_text_path_idx" ON "services_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "services_blocks_contact_order_idx" ON "services_blocks_contact" USING btree ("_order");
  CREATE INDEX "services_blocks_contact_parent_id_idx" ON "services_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_contact_path_idx" ON "services_blocks_contact" USING btree ("_path");
  CREATE INDEX "services_blocks_cta_order_idx" ON "services_blocks_cta" USING btree ("_order");
  CREATE INDEX "services_blocks_cta_parent_id_idx" ON "services_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_cta_path_idx" ON "services_blocks_cta" USING btree ("_path");
  CREATE INDEX "services_blocks_cta_primary_cta_primary_cta_page_idx" ON "services_blocks_cta" USING btree ("primary_cta_page_id");
  CREATE INDEX "services_blocks_cta_primary_cta_primary_cta_service_idx" ON "services_blocks_cta" USING btree ("primary_cta_service_id");
  CREATE INDEX "services_blocks_cta_secondary_cta_secondary_cta_page_idx" ON "services_blocks_cta" USING btree ("secondary_cta_page_id");
  CREATE INDEX "services_blocks_cta_secondary_cta_secondary_cta_service_idx" ON "services_blocks_cta" USING btree ("secondary_cta_service_id");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_hero_primary_cta_hero_primary_cta_page_idx" ON "services" USING btree ("hero_primary_cta_page_id");
  CREATE INDEX "services_hero_primary_cta_hero_primary_cta_service_idx" ON "services" USING btree ("hero_primary_cta_service_id");
  CREATE INDEX "services_hero_secondary_cta_hero_secondary_cta_page_idx" ON "services" USING btree ("hero_secondary_cta_page_id");
  CREATE INDEX "services_hero_secondary_cta_hero_secondary_cta_service_idx" ON "services" USING btree ("hero_secondary_cta_service_id");
  CREATE INDEX "services_hero_hero_media_idx" ON "services" USING btree ("hero_media_id");
  CREATE INDEX "services_meta_meta_image_idx" ON "services" USING btree ("meta_image_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_services_id_idx" ON "services_rels" USING btree ("services_id");
  CREATE INDEX "services_rels_faqs_id_idx" ON "services_rels" USING btree ("faqs_id");
  CREATE INDEX "_services_v_version_hero_status_cards_order_idx" ON "_services_v_version_hero_status_cards" USING btree ("_order");
  CREATE INDEX "_services_v_version_hero_status_cards_parent_id_idx" ON "_services_v_version_hero_status_cards" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_scope_items_order_idx" ON "_services_v_version_scope_items" USING btree ("_order");
  CREATE INDEX "_services_v_version_scope_items_parent_id_idx" ON "_services_v_version_scope_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_industries_items_order_idx" ON "_services_v_version_industries_items" USING btree ("_order");
  CREATE INDEX "_services_v_version_industries_items_parent_id_idx" ON "_services_v_version_industries_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_grid_order_idx" ON "_services_v_blocks_services_grid" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_services_grid_parent_id_idx" ON "_services_v_blocks_services_grid" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_services_grid_path_idx" ON "_services_v_blocks_services_grid" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_bento_items_order_idx" ON "_services_v_blocks_bento_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_bento_items_parent_id_idx" ON "_services_v_blocks_bento_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_bento_order_idx" ON "_services_v_blocks_bento" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_bento_parent_id_idx" ON "_services_v_blocks_bento" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_bento_path_idx" ON "_services_v_blocks_bento" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_statement_order_idx" ON "_services_v_blocks_statement" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_statement_parent_id_idx" ON "_services_v_blocks_statement" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_statement_path_idx" ON "_services_v_blocks_statement" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_stats_items_order_idx" ON "_services_v_blocks_stats_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_stats_items_parent_id_idx" ON "_services_v_blocks_stats_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_stats_order_idx" ON "_services_v_blocks_stats" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_stats_parent_id_idx" ON "_services_v_blocks_stats" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_stats_path_idx" ON "_services_v_blocks_stats" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_logo_strip_order_idx" ON "_services_v_blocks_logo_strip" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_logo_strip_parent_id_idx" ON "_services_v_blocks_logo_strip" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_logo_strip_path_idx" ON "_services_v_blocks_logo_strip" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_process_steps_order_idx" ON "_services_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_process_steps_parent_id_idx" ON "_services_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_process_order_idx" ON "_services_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_process_parent_id_idx" ON "_services_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_process_path_idx" ON "_services_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_features_items_order_idx" ON "_services_v_blocks_features_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_features_items_parent_id_idx" ON "_services_v_blocks_features_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_features_order_idx" ON "_services_v_blocks_features" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_features_parent_id_idx" ON "_services_v_blocks_features" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_features_path_idx" ON "_services_v_blocks_features" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_split_order_idx" ON "_services_v_blocks_split" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_split_parent_id_idx" ON "_services_v_blocks_split" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_split_path_idx" ON "_services_v_blocks_split" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_split_cta_cta_page_idx" ON "_services_v_blocks_split" USING btree ("cta_page_id");
  CREATE INDEX "_services_v_blocks_split_cta_cta_service_idx" ON "_services_v_blocks_split" USING btree ("cta_service_id");
  CREATE INDEX "_services_v_blocks_split_media_idx" ON "_services_v_blocks_split" USING btree ("media_id");
  CREATE INDEX "_services_v_blocks_media_block_order_idx" ON "_services_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_media_block_parent_id_idx" ON "_services_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_media_block_path_idx" ON "_services_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_media_block_media_idx" ON "_services_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_services_v_blocks_coverage_map_order_idx" ON "_services_v_blocks_coverage_map" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_coverage_map_parent_id_idx" ON "_services_v_blocks_coverage_map" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_coverage_map_path_idx" ON "_services_v_blocks_coverage_map" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_banner_order_idx" ON "_services_v_blocks_banner" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_banner_parent_id_idx" ON "_services_v_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_banner_path_idx" ON "_services_v_blocks_banner" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_banner_media_idx" ON "_services_v_blocks_banner" USING btree ("media_id");
  CREATE INDEX "_services_v_blocks_banner_cta_cta_page_idx" ON "_services_v_blocks_banner" USING btree ("cta_page_id");
  CREATE INDEX "_services_v_blocks_banner_cta_cta_service_idx" ON "_services_v_blocks_banner" USING btree ("cta_service_id");
  CREATE INDEX "_services_v_blocks_faq_order_idx" ON "_services_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_faq_parent_id_idx" ON "_services_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_faq_path_idx" ON "_services_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_rich_text_order_idx" ON "_services_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_rich_text_parent_id_idx" ON "_services_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_rich_text_path_idx" ON "_services_v_blocks_rich_text" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_contact_order_idx" ON "_services_v_blocks_contact" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_contact_parent_id_idx" ON "_services_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_contact_path_idx" ON "_services_v_blocks_contact" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_cta_order_idx" ON "_services_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_cta_parent_id_idx" ON "_services_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_cta_path_idx" ON "_services_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_cta_primary_cta_primary_cta_page_idx" ON "_services_v_blocks_cta" USING btree ("primary_cta_page_id");
  CREATE INDEX "_services_v_blocks_cta_primary_cta_primary_cta_service_idx" ON "_services_v_blocks_cta" USING btree ("primary_cta_service_id");
  CREATE INDEX "_services_v_blocks_cta_secondary_cta_secondary_cta_page_idx" ON "_services_v_blocks_cta" USING btree ("secondary_cta_page_id");
  CREATE INDEX "_services_v_blocks_cta_secondary_cta_secondary_cta_servi_idx" ON "_services_v_blocks_cta" USING btree ("secondary_cta_service_id");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_version_slug_idx" ON "_services_v" USING btree ("version_slug");
  CREATE INDEX "_services_v_version_hero_primary_cta_version_hero_primar_idx" ON "_services_v" USING btree ("version_hero_primary_cta_page_id");
  CREATE INDEX "_services_v_version_hero_primary_cta_version_hero_prim_1_idx" ON "_services_v" USING btree ("version_hero_primary_cta_service_id");
  CREATE INDEX "_services_v_version_hero_secondary_cta_version_hero_seco_idx" ON "_services_v" USING btree ("version_hero_secondary_cta_page_id");
  CREATE INDEX "_services_v_version_hero_secondary_cta_version_hero_se_1_idx" ON "_services_v" USING btree ("version_hero_secondary_cta_service_id");
  CREATE INDEX "_services_v_version_hero_version_hero_media_idx" ON "_services_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_services_v_version_meta_version_meta_image_idx" ON "_services_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX "_services_v_autosave_idx" ON "_services_v" USING btree ("autosave");
  CREATE INDEX "_services_v_rels_order_idx" ON "_services_v_rels" USING btree ("order");
  CREATE INDEX "_services_v_rels_parent_idx" ON "_services_v_rels" USING btree ("parent_id");
  CREATE INDEX "_services_v_rels_path_idx" ON "_services_v_rels" USING btree ("path");
  CREATE INDEX "_services_v_rels_services_id_idx" ON "_services_v_rels" USING btree ("services_id");
  CREATE INDEX "_services_v_rels_faqs_id_idx" ON "_services_v_rels" USING btree ("faqs_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "clients_logo_idx" ON "clients" USING btree ("logo_id");
  CREATE INDEX "clients_updated_at_idx" ON "clients" USING btree ("updated_at");
  CREATE INDEX "clients_created_at_idx" ON "clients" USING btree ("created_at");
  CREATE INDEX "partners_logo_idx" ON "partners" USING btree ("logo_id");
  CREATE INDEX "partners_updated_at_idx" ON "partners" USING btree ("updated_at");
  CREATE INDEX "partners_created_at_idx" ON "partners" USING btree ("created_at");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "leads_updated_at_idx" ON "leads" USING btree ("updated_at");
  CREATE INDEX "leads_created_at_idx" ON "leads" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_clients_id_idx" ON "payload_locked_documents_rels" USING btree ("clients_id");
  CREATE INDEX "payload_locked_documents_rels_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("partners_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_leads_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_socials_order_idx" ON "site_settings_socials" USING btree ("_order");
  CREATE INDEX "site_settings_socials_parent_id_idx" ON "site_settings_socials" USING btree ("_parent_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "site_settings_logo_on_dark_idx" ON "site_settings" USING btree ("logo_on_dark_id");
  CREATE INDEX "site_settings_og_image_idx" ON "site_settings" USING btree ("og_image_id");
  CREATE INDEX "header_items_order_idx" ON "header_items" USING btree ("_order");
  CREATE INDEX "header_items_parent_id_idx" ON "header_items" USING btree ("_parent_id");
  CREATE INDEX "header_items_link_link_page_idx" ON "header_items" USING btree ("link_page_id");
  CREATE INDEX "header_items_link_link_service_idx" ON "header_items" USING btree ("link_service_id");
  CREATE INDEX "header_cta_cta_page_idx" ON "header" USING btree ("cta_page_id");
  CREATE INDEX "header_cta_cta_service_idx" ON "header" USING btree ("cta_service_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_links_link_link_page_idx" ON "footer_columns_links" USING btree ("link_page_id");
  CREATE INDEX "footer_columns_links_link_link_service_idx" ON "footer_columns_links" USING btree ("link_service_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX "chat_widget_days_order_idx" ON "chat_widget_days" USING btree ("order");
  CREATE INDEX "chat_widget_days_parent_idx" ON "chat_widget_days" USING btree ("parent_id");
  CREATE INDEX "chat_widget_options_order_idx" ON "chat_widget_options" USING btree ("_order");
  CREATE INDEX "chat_widget_options_parent_id_idx" ON "chat_widget_options" USING btree ("_parent_id");
  CREATE INDEX "announcement_link_link_page_idx" ON "announcement" USING btree ("link_page_id");
  CREATE INDEX "announcement_link_link_service_idx" ON "announcement" USING btree ("link_service_id");
  CREATE INDEX "shared_sections_process_order_idx" ON "shared_sections_process" USING btree ("_order");
  CREATE INDEX "shared_sections_process_parent_id_idx" ON "shared_sections_process" USING btree ("_parent_id");
  CREATE INDEX "shared_sections_cta_primary_cta_cta_primary_cta_page_idx" ON "shared_sections" USING btree ("cta_primary_cta_page_id");
  CREATE INDEX "shared_sections_cta_primary_cta_cta_primary_cta_service_idx" ON "shared_sections" USING btree ("cta_primary_cta_service_id");
  CREATE INDEX "shared_sections_cta_secondary_cta_cta_secondary_cta_page_idx" ON "shared_sections" USING btree ("cta_secondary_cta_page_id");
  CREATE INDEX "shared_sections_cta_secondary_cta_cta_secondary_cta_serv_idx" ON "shared_sections" USING btree ("cta_secondary_cta_service_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_status_cards" CASCADE;
  DROP TABLE "pages_blocks_services_grid" CASCADE;
  DROP TABLE "pages_blocks_bento_items" CASCADE;
  DROP TABLE "pages_blocks_bento" CASCADE;
  DROP TABLE "pages_blocks_statement" CASCADE;
  DROP TABLE "pages_blocks_stats_items" CASCADE;
  DROP TABLE "pages_blocks_stats" CASCADE;
  DROP TABLE "pages_blocks_logo_strip" CASCADE;
  DROP TABLE "pages_blocks_process_steps" CASCADE;
  DROP TABLE "pages_blocks_process" CASCADE;
  DROP TABLE "pages_blocks_features_items" CASCADE;
  DROP TABLE "pages_blocks_features" CASCADE;
  DROP TABLE "pages_blocks_split" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_coverage_map" CASCADE;
  DROP TABLE "pages_blocks_banner" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_status_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_services_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_bento_items" CASCADE;
  DROP TABLE "_pages_v_blocks_bento" CASCADE;
  DROP TABLE "_pages_v_blocks_statement" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_items" CASCADE;
  DROP TABLE "_pages_v_blocks_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_strip" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_process" CASCADE;
  DROP TABLE "_pages_v_blocks_features_items" CASCADE;
  DROP TABLE "_pages_v_blocks_features" CASCADE;
  DROP TABLE "_pages_v_blocks_split" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_coverage_map" CASCADE;
  DROP TABLE "_pages_v_blocks_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_contact" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "services_hero_status_cards" CASCADE;
  DROP TABLE "services_scope_items" CASCADE;
  DROP TABLE "services_industries_items" CASCADE;
  DROP TABLE "services_blocks_services_grid" CASCADE;
  DROP TABLE "services_blocks_bento_items" CASCADE;
  DROP TABLE "services_blocks_bento" CASCADE;
  DROP TABLE "services_blocks_statement" CASCADE;
  DROP TABLE "services_blocks_stats_items" CASCADE;
  DROP TABLE "services_blocks_stats" CASCADE;
  DROP TABLE "services_blocks_logo_strip" CASCADE;
  DROP TABLE "services_blocks_process_steps" CASCADE;
  DROP TABLE "services_blocks_process" CASCADE;
  DROP TABLE "services_blocks_features_items" CASCADE;
  DROP TABLE "services_blocks_features" CASCADE;
  DROP TABLE "services_blocks_split" CASCADE;
  DROP TABLE "services_blocks_media_block" CASCADE;
  DROP TABLE "services_blocks_coverage_map" CASCADE;
  DROP TABLE "services_blocks_banner" CASCADE;
  DROP TABLE "services_blocks_faq" CASCADE;
  DROP TABLE "services_blocks_rich_text" CASCADE;
  DROP TABLE "services_blocks_contact" CASCADE;
  DROP TABLE "services_blocks_cta" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "_services_v_version_hero_status_cards" CASCADE;
  DROP TABLE "_services_v_version_scope_items" CASCADE;
  DROP TABLE "_services_v_version_industries_items" CASCADE;
  DROP TABLE "_services_v_blocks_services_grid" CASCADE;
  DROP TABLE "_services_v_blocks_bento_items" CASCADE;
  DROP TABLE "_services_v_blocks_bento" CASCADE;
  DROP TABLE "_services_v_blocks_statement" CASCADE;
  DROP TABLE "_services_v_blocks_stats_items" CASCADE;
  DROP TABLE "_services_v_blocks_stats" CASCADE;
  DROP TABLE "_services_v_blocks_logo_strip" CASCADE;
  DROP TABLE "_services_v_blocks_process_steps" CASCADE;
  DROP TABLE "_services_v_blocks_process" CASCADE;
  DROP TABLE "_services_v_blocks_features_items" CASCADE;
  DROP TABLE "_services_v_blocks_features" CASCADE;
  DROP TABLE "_services_v_blocks_split" CASCADE;
  DROP TABLE "_services_v_blocks_media_block" CASCADE;
  DROP TABLE "_services_v_blocks_coverage_map" CASCADE;
  DROP TABLE "_services_v_blocks_banner" CASCADE;
  DROP TABLE "_services_v_blocks_faq" CASCADE;
  DROP TABLE "_services_v_blocks_rich_text" CASCADE;
  DROP TABLE "_services_v_blocks_contact" CASCADE;
  DROP TABLE "_services_v_blocks_cta" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "clients" CASCADE;
  DROP TABLE "partners" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "leads" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings_socials" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "header_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "chat_widget_days" CASCADE;
  DROP TABLE "chat_widget_options" CASCADE;
  DROP TABLE "chat_widget" CASCADE;
  DROP TABLE "announcement" CASCADE;
  DROP TABLE "shared_sections_process" CASCADE;
  DROP TABLE "shared_sections" CASCADE;
  DROP TYPE "public"."enum_pages_hero_status_cards_icon";
  DROP TYPE "public"."enum_pages_hero_status_cards_tone";
  DROP TYPE "public"."enum_pages_blocks_services_grid_theme";
  DROP TYPE "public"."enum_pages_blocks_bento_items_variant";
  DROP TYPE "public"."enum_pages_blocks_bento_items_art";
  DROP TYPE "public"."enum_pages_blocks_bento_theme";
  DROP TYPE "public"."enum_pages_blocks_statement_theme";
  DROP TYPE "public"."enum_pages_blocks_stats_theme";
  DROP TYPE "public"."enum_pages_blocks_logo_strip_source";
  DROP TYPE "public"."enum_pages_blocks_logo_strip_display";
  DROP TYPE "public"."enum_pages_blocks_logo_strip_theme";
  DROP TYPE "public"."enum_pages_blocks_process_theme";
  DROP TYPE "public"."enum_pages_blocks_features_items_icon";
  DROP TYPE "public"."enum_pages_blocks_features_columns";
  DROP TYPE "public"."enum_pages_blocks_features_theme";
  DROP TYPE "public"."enum_pages_blocks_split_cta_type";
  DROP TYPE "public"."enum_pages_blocks_split_theme";
  DROP TYPE "public"."enum_pages_blocks_media_block_size";
  DROP TYPE "public"."enum_pages_blocks_media_block_theme";
  DROP TYPE "public"."enum_pages_blocks_coverage_map_theme";
  DROP TYPE "public"."enum_pages_blocks_banner_cta_type";
  DROP TYPE "public"."enum_pages_blocks_banner_tone";
  DROP TYPE "public"."enum_pages_blocks_faq_theme";
  DROP TYPE "public"."enum_pages_blocks_rich_text_width";
  DROP TYPE "public"."enum_pages_blocks_rich_text_theme";
  DROP TYPE "public"."enum_pages_blocks_contact_theme";
  DROP TYPE "public"."enum_pages_blocks_cta_primary_cta_type";
  DROP TYPE "public"."enum_pages_blocks_cta_secondary_cta_type";
  DROP TYPE "public"."enum_pages_blocks_cta_theme";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_hero_primary_cta_type";
  DROP TYPE "public"."enum_pages_hero_secondary_cta_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_status_cards_icon";
  DROP TYPE "public"."enum__pages_v_version_hero_status_cards_tone";
  DROP TYPE "public"."enum__pages_v_blocks_services_grid_theme";
  DROP TYPE "public"."enum__pages_v_blocks_bento_items_variant";
  DROP TYPE "public"."enum__pages_v_blocks_bento_items_art";
  DROP TYPE "public"."enum__pages_v_blocks_bento_theme";
  DROP TYPE "public"."enum__pages_v_blocks_statement_theme";
  DROP TYPE "public"."enum__pages_v_blocks_stats_theme";
  DROP TYPE "public"."enum__pages_v_blocks_logo_strip_source";
  DROP TYPE "public"."enum__pages_v_blocks_logo_strip_display";
  DROP TYPE "public"."enum__pages_v_blocks_logo_strip_theme";
  DROP TYPE "public"."enum__pages_v_blocks_process_theme";
  DROP TYPE "public"."enum__pages_v_blocks_features_items_icon";
  DROP TYPE "public"."enum__pages_v_blocks_features_columns";
  DROP TYPE "public"."enum__pages_v_blocks_features_theme";
  DROP TYPE "public"."enum__pages_v_blocks_split_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_split_theme";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_size";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_theme";
  DROP TYPE "public"."enum__pages_v_blocks_coverage_map_theme";
  DROP TYPE "public"."enum__pages_v_blocks_banner_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner_tone";
  DROP TYPE "public"."enum__pages_v_blocks_faq_theme";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_theme";
  DROP TYPE "public"."enum__pages_v_blocks_contact_theme";
  DROP TYPE "public"."enum__pages_v_blocks_cta_primary_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_secondary_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_theme";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_primary_cta_type";
  DROP TYPE "public"."enum__pages_v_version_hero_secondary_cta_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_services_hero_status_cards_icon";
  DROP TYPE "public"."enum_services_hero_status_cards_tone";
  DROP TYPE "public"."enum_services_scope_items_icon";
  DROP TYPE "public"."enum_services_industries_items_icon";
  DROP TYPE "public"."enum_services_blocks_services_grid_theme";
  DROP TYPE "public"."enum_services_blocks_bento_items_variant";
  DROP TYPE "public"."enum_services_blocks_bento_items_art";
  DROP TYPE "public"."enum_services_blocks_bento_theme";
  DROP TYPE "public"."enum_services_blocks_statement_theme";
  DROP TYPE "public"."enum_services_blocks_stats_theme";
  DROP TYPE "public"."enum_services_blocks_logo_strip_source";
  DROP TYPE "public"."enum_services_blocks_logo_strip_display";
  DROP TYPE "public"."enum_services_blocks_logo_strip_theme";
  DROP TYPE "public"."enum_services_blocks_process_theme";
  DROP TYPE "public"."enum_services_blocks_features_items_icon";
  DROP TYPE "public"."enum_services_blocks_features_columns";
  DROP TYPE "public"."enum_services_blocks_features_theme";
  DROP TYPE "public"."enum_services_blocks_split_cta_type";
  DROP TYPE "public"."enum_services_blocks_split_theme";
  DROP TYPE "public"."enum_services_blocks_media_block_size";
  DROP TYPE "public"."enum_services_blocks_media_block_theme";
  DROP TYPE "public"."enum_services_blocks_coverage_map_theme";
  DROP TYPE "public"."enum_services_blocks_banner_cta_type";
  DROP TYPE "public"."enum_services_blocks_banner_tone";
  DROP TYPE "public"."enum_services_blocks_faq_theme";
  DROP TYPE "public"."enum_services_blocks_rich_text_width";
  DROP TYPE "public"."enum_services_blocks_rich_text_theme";
  DROP TYPE "public"."enum_services_blocks_contact_theme";
  DROP TYPE "public"."enum_services_blocks_cta_primary_cta_type";
  DROP TYPE "public"."enum_services_blocks_cta_secondary_cta_type";
  DROP TYPE "public"."enum_services_blocks_cta_theme";
  DROP TYPE "public"."enum_services_icon";
  DROP TYPE "public"."enum_services_hero_type";
  DROP TYPE "public"."enum_services_hero_primary_cta_type";
  DROP TYPE "public"."enum_services_hero_secondary_cta_type";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_version_hero_status_cards_icon";
  DROP TYPE "public"."enum__services_v_version_hero_status_cards_tone";
  DROP TYPE "public"."enum__services_v_version_scope_items_icon";
  DROP TYPE "public"."enum__services_v_version_industries_items_icon";
  DROP TYPE "public"."enum__services_v_blocks_services_grid_theme";
  DROP TYPE "public"."enum__services_v_blocks_bento_items_variant";
  DROP TYPE "public"."enum__services_v_blocks_bento_items_art";
  DROP TYPE "public"."enum__services_v_blocks_bento_theme";
  DROP TYPE "public"."enum__services_v_blocks_statement_theme";
  DROP TYPE "public"."enum__services_v_blocks_stats_theme";
  DROP TYPE "public"."enum__services_v_blocks_logo_strip_source";
  DROP TYPE "public"."enum__services_v_blocks_logo_strip_display";
  DROP TYPE "public"."enum__services_v_blocks_logo_strip_theme";
  DROP TYPE "public"."enum__services_v_blocks_process_theme";
  DROP TYPE "public"."enum__services_v_blocks_features_items_icon";
  DROP TYPE "public"."enum__services_v_blocks_features_columns";
  DROP TYPE "public"."enum__services_v_blocks_features_theme";
  DROP TYPE "public"."enum__services_v_blocks_split_cta_type";
  DROP TYPE "public"."enum__services_v_blocks_split_theme";
  DROP TYPE "public"."enum__services_v_blocks_media_block_size";
  DROP TYPE "public"."enum__services_v_blocks_media_block_theme";
  DROP TYPE "public"."enum__services_v_blocks_coverage_map_theme";
  DROP TYPE "public"."enum__services_v_blocks_banner_cta_type";
  DROP TYPE "public"."enum__services_v_blocks_banner_tone";
  DROP TYPE "public"."enum__services_v_blocks_faq_theme";
  DROP TYPE "public"."enum__services_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__services_v_blocks_rich_text_theme";
  DROP TYPE "public"."enum__services_v_blocks_contact_theme";
  DROP TYPE "public"."enum__services_v_blocks_cta_primary_cta_type";
  DROP TYPE "public"."enum__services_v_blocks_cta_secondary_cta_type";
  DROP TYPE "public"."enum__services_v_blocks_cta_theme";
  DROP TYPE "public"."enum__services_v_version_icon";
  DROP TYPE "public"."enum__services_v_version_hero_type";
  DROP TYPE "public"."enum__services_v_version_hero_primary_cta_type";
  DROP TYPE "public"."enum__services_v_version_hero_secondary_cta_type";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_leads_status";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_site_settings_socials_platform";
  DROP TYPE "public"."enum_header_items_link_type";
  DROP TYPE "public"."enum_header_cta_type";
  DROP TYPE "public"."enum_footer_columns_links_link_type";
  DROP TYPE "public"."enum_chat_widget_days";
  DROP TYPE "public"."enum_chat_widget_options_action";
  DROP TYPE "public"."enum_announcement_link_type";
  DROP TYPE "public"."enum_announcement_tone";
  DROP TYPE "public"."enum_shared_sections_cta_primary_cta_type";
  DROP TYPE "public"."enum_shared_sections_cta_secondary_cta_type";`)
}
