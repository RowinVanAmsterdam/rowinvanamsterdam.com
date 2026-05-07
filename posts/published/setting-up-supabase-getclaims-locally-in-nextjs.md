---
slug: "setting-up-supabase-getclaims-locally-in-nextjs"
date: "2026-05-07"
title: "Setting Up Supabase getClaims() Locally in Next.js"
description: "How I migrated from Supabase auth.getUser() to getClaims() in Next.js, including the extra signing key setup required for local Supabase development."
author: "Rowin van Amsterdam"
authorImage: "/images/profile-pictures/profile-picture.jpg"
banner: "/articleMedia/setting-up-supabase-getclaims-locally-in-nextjs/banner.jpg"
bannerAlt: "Supabase authentication code in Next.js"
bannerCaption: ""
bannerCaptionLink: ""
---

I recently migrated my Next.js project from `auth.getUser()` to `getClaims()` in Supabase.

The biggest difference is that `getClaims()` can verify the JWT locally instead of making a roundtrip to Supabase servers on every request. That means faster auth checks and less latency overall. Supabase explains the concept well in this [video](https://www.youtube.com/watch?v=rwnOal_xRtM).

However, the video mainly focuses on hosted Supabase. If you're running Supabase locally, there’s some extra setup required before `getClaims()` works properly.

## Generate signing keys

First, stop your local Supabase instance:

```bash
npx supabase stop
```

Then generate a signing key:

```bash
npx supabase gen signing-key ES256
```

## Create `signing_keys.json`

The command outputs a JSON object containing your signing key.

Create a `signing_keys.json` file and wrap the generated object inside an array:

```json
[
  {
    "alg": "ES256",
    "kid": "example-key-id",
    "kty": "EC"
  }
]
```

It’s important that the object is wrapped in an array. Otherwise, Supabase throws this error:

```txt
failed to decode signing keys: failed to parse response body: json: cannot unmarshal object into Go value of type []config.JWK
```

Also make sure to add `signing_keys.json` to `.gitignore`, since you don’t want to commit private signing keys.

## Update `config.toml`

In your `config.toml`, uncomment:

```toml
signing_keys_path = "./signing_keys.json"
```

Make sure the path points to the correct file.

## Start Supabase again

```bash
npx supabase start
```

After that, `getClaims()` should work locally as expected.