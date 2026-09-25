-- Run once in Supabase Dashboard → SQL Editor (after 001_initial_schema.sql)
-- Grants admin panel access for princekumardas5120@gmail.com

insert into public.admin_users (user_id)
values ('26135e90-8cbd-414c-99d7-f6122ca5d878')
on conflict (user_id) do nothing;
