-- Optional seed: run after migration to populate CMS tables from defaults.
-- Safe to re-run (uses on conflict).

insert into public.services (id, title, description, icon, popular, sort_order) values
  ('pizza-oven-repair', 'Pizza Oven Repair', 'Comprehensive diagnosis and prompt repair for commercial and heavy-duty pizza ovens.', 'Flame', true, 1),
  ('gas-pizza-oven-service', 'Gas Pizza Oven Service', 'Routine calibration, line testing, and thorough servicing for gas-operated baking equipment.', 'Wrench', true, 2),
  ('oven-maintenance', 'Preventative Maintenance', 'Scheduled checkups to help prevent sudden breakdown during peak operational hours.', 'ShieldCheck', false, 3),
  ('gas-system-inspection', 'Gas System Inspection', 'Leakage inspection, pressure testing, and gas train component evaluation.', 'Cog', false, 4),
  ('burner-service', 'Burner Related Service', 'Jet cleaning, flame regulation, pilot light repair, and burner manifold servicing.', 'Sparkles', true, 5),
  ('temperature-diagnosis', 'Heating / Temp Diagnosis', 'Thermostat check, heat distribution assessment, thermocouple and safety valve testing.', 'Compass', false, 6),
  ('spare-parts-replacement', 'Spare Parts Replacement', 'Fitting compatible replacement components for faulty or worn oven parts.', 'Layers', false, 7),
  ('commercial-kitchen', 'Commercial Kitchen Support', 'General technical support for related commercial food preparation and baking equipment.', 'Info', false, 8)
on conflict (id) do update set
  title = excluded.title,
  description = excluded.description,
  icon = excluded.icon,
  popular = excluded.popular,
  sort_order = excluded.sort_order;

insert into public.spare_parts (id, name, category, description, compatible, image_src, image_alt, sort_order) values
  ('part-1', 'Commercial Gas Burner Assembly', 'Burners', 'Heavy-duty burner unit suitable for commercial deck pizza ovens.', 'Commercial deck ovens — confirm model before ordering', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600', 'Commercial gas burner assembly placeholder', 1),
  ('part-2', 'Gas Control Thermostat Valve', 'Gas Components', 'Gas regulation valve with integrated safety shut-off mechanism.', 'Standard gas pizza ovens — enquire for fitment', 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600', 'Gas control valve placeholder', 2),
  ('part-3', 'High-Temp Thermocouple Sensor', 'Heating Components', 'Flame sensor lead engineered for continuous high baking heat.', 'Universal gas appliances — verify specifications', 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600', 'Thermocouple sensor placeholder', 3),
  ('part-4', 'Heat-Resistant Control Knobs', 'Knobs & Controls', 'Control knobs with clear temperature indicators for oven panels.', 'Multiple oven types — send photos for matching', 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600', 'Control knobs placeholder', 4),
  ('part-5', 'Piezo Spark Igniter Kit', 'Replacement Parts', 'Push-button ignition kit with wire lead and ceramic electrode.', 'Gas pizza ovens', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600', 'Igniter kit placeholder', 5),
  ('part-6', 'Gas Regulator & Pressure Gauge', 'Gas Components', 'Pressure regulator for steady commercial gas flow — professional fitting recommended.', 'LPG & PNG setups — confirm with technician', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', 'Gas regulator placeholder', 6)
on conflict (id) do update set
  name = excluded.name,
  category = excluded.category,
  description = excluded.description,
  compatible = excluded.compatible,
  image_src = excluded.image_src,
  image_alt = excluded.image_alt,
  sort_order = excluded.sort_order;

insert into public.gallery_items (title, category, src, caption, alt, sort_order) values
  ('Gas Pizza Oven Inspection', 'Repairs', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800', 'Technical check of flame ignition and gas train manifold.', 'Pizza oven inspection placeholder', 1),
  ('Commercial Deck Oven', 'Ovens', 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800', 'Heavy duty commercial pizza baking unit servicing.', 'Commercial deck oven placeholder', 2),
  ('Spare Parts Inventory', 'Spare Parts', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800', 'Burner, valve, and ignition replacement stock.', 'Spare parts placeholder', 3),
  ('Burner Nozzle Servicing', 'Repairs', 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800', 'Clearing carbon buildup and checking flame quality.', 'Burner servicing placeholder', 4),
  ('Workshop Testing Station', 'Workshop', 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800', 'Component bench testing before installation.', 'Workshop placeholder', 5),
  ('Oven Temperature Calibration', 'Ovens', 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=800', 'Verifying deck baking temperatures.', 'Temperature calibration placeholder', 6);
