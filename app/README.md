# **Trail Hikes App**

## Overview

This is to be a personal trail hiking application that allows you to add a hike that you have been on. You log the name of the trail, the state it is in, the distance of the hike, the difficulty level, terrain, and any notes from the hike. You can also get a list of all your hikes.

## Primary Objectives

- Create a _proHiker_ (admin).
- Add a _trail_.
- Get _all_ trails (proHiker- all hikers trails).
- Delete _any_ trail (proHiker- any hikers trails).

## Secondary Objectives

- Get all of a hiker's trails
- Change a trails info.
- Get hikers trails by state.
- Get hikers trails by difficulty.

## Bonus Objectives

- Add photos.
- Add a chat.
- Mobile version.

_I have not seen any apps or web pages that allow you to add, delete, or share hiking trails. There are hiking apps and pages I have seen, but they only allow comments and usually just show hiking trails in the area. I'm still checking them out!_

## _Sample data structure_

This is for _Primary_ and _Secondary_ Objectives.

### proHiker

```json
{
  "username": "prohiker",
  "password": "allknowing"
}
```

The password will be encrypted.

### Hiker

```json
{
  "username": "Jason",
  "password": "trailhiker",
  "trails": []
}
```

### Trails

```json
{
  "trailName": "grand canyon trail",
  "state": "New Jersey",
  "distance": "3.2 miles",
  "difficulty": "moderate",
  "terrain": "river bed"
}
```

## _Routes_

All routes will have '/api' preface.
All routes will be JWT protected after proHiker authentication.

### Hiker

`/hiker`

`POST` - `/register`
`POST` - `/authenticate`
As well as standard 4 api routes.

### proHiker

`/proHiker`

`POST` - `/register`
`POST` - `/authenticate`
As well as standard 4 api routes.

### Trails

`/trails`

Standard 4 api routes.

## _Data_

There will be a sample data set (in DB) to use so I have a few hikes to mess with on insomnia. Then from that, I can GET, POST, PUT, or DELETE trails for the assignment (in **_Insomnia_**).

## External APIs

No APIs used at this time.
