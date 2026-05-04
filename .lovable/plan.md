Match the parents' names to the uploaded calligraphy reference (flowing Diwani-style Arabic in gold).

Steps:

1. Generate two calligraphy PNGs in the same style as the uploaded reference:
   - `src/assets/parents-tala.png` — علي وميرنا شعبان
   - `src/assets/parents-mohammad.png` — حسين وخولا الزير
   - Transparent background, gold tone matching `#A48347`, same flowing cursive style as the reference image.

2. Update `src/routes/index.tsx`:
   - Replace the two text `<p>` elements in the parents grid with `<img>` tags using the new calligraphy assets.
   - Keep the two-column layout, centered, balanced sizing.
   - Remove the now-unused `.font-arabic-calligraphy` text styling on those lines.

3. Verify spacing inside the lace border so the ayah, parents block, and date/venue all stay clear of the ornamental edge.