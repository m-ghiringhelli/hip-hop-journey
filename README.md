PLAN:

I. Main Page
  A. Header
    1. email
  B. Body
    1. Date Section
      a. Display date
      b. Display date facts
    2. Album Section
      a. Previous Album
        i. Artist
        ii. Title
        iii. Location
      b. Current Album
        i. Artist
        ii. Title
        iii. Location
        iv. Add to Favorites Button
      c. Next Album
        i. Artist
        ii. Title
        iii. Location
II. Auth Page
  A. Header
  B. Body
    1. Text
    2. Auth Form
      a. email input
      b. password input
      c. signup button
      d. signin button
III. User Profile
  A. Header
    1. email
  B. Body
    1. date
    2. albums
      a. album card
        i. img
        ii. artist
        iii. title
        iv. date
        v. location

UPDATED PLAN: 
I. Finish Auth
  A. Current album for user
    1. Add current album column
      a. SQL
      b. check in beekeeper
    2. Make foreign key to album table (revisit after setup album table)
    3. Default to 1
  B. Display User Info in header
    1. Fetch user info?
    2. Store in state
    3. Display (header?)
II. Basic Functionality (album navigation)
  A. Get albums in SQL
    1. Redo google sheets to include region
    2. Sort by date
    3. Create CSV
    4. Convert to SQL
    5. Seed table
    6. Foreign key from user current album
  B. Fetch album based on user's current album
    1. Can keep basic React functionality
    2. Setup data on backend to look like Supabase response
III. Save Albums
  A. User profile table?
  B. Add album to user profile
IV. What Happened When Album Came Out
  A. This day in history API
  B. When fetching current album, fetch history facts based on album date
V. This Day in History release
  A. Get current date
  B. Fetch from album table based on date
  C. Display (header?)
VI. Map to show favorite albums
  A. On user profile table
  B. Mapbox
VII. Album Art
  A. Figure out album art API
VIII. Misc
  A. Create different album card component types?
  B. Custom CSS loader