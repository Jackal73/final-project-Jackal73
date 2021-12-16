# **Trail Hikes App**

## Overview

This is to be a personal trail hiking application that allows you to add a hike that you have been on. You log the name of the trail, the state it is in, the distance of the hike, the difficulty level, terrain, and any notes from the hike. You can also get a list of all your hikes.

## Primary Objectives

- Create a _Pro_ (admin).
- Add a _trail_.
- Get _all_ trails (Pro- all trails).
- Delete _any_ trail (Pro- any trails).

## Secondary Objectives

- Change a trails info.
- Get trails by Id.
- Update trails by Id.

## Bonus Objectives

- Add photos.
- Add a chat.
- Mobile version.

_I have not seen any apps or web pages that allow you to add, delete, or share hiking trails. There are hiking apps and pages I have seen, but they only allow comments and usually just show hiking trails in the area. I'm still checking them out!_

## _Sample data structure_

This is for _Primary_ and _Secondary_ Objectives.

### Pro

```json
{
  "username": "Jason",
  "password": "yoshi1988",
  "trails": []
}
```

The password will be encrypted.

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

Sample for inputs - add info

```json
{
  "trailName": "",
  "state": "",
  "distance": "",
  "difficulty": "",
  "terrain": ""
}
```

## _Routes_

All routes will have '/api' preface.
All routes will be JWT protected after proHiker authentication.

### {Pro}

`/pro`

`POST` - `/register`
`POST` - `/login`

### Trails

`/trails`

`POST` - `trails/all`
`POST` - `trails`
`POST` - `trails/:id`
`PUT` - `trails/:id`
`DELETE` - trails/:id

## _Data_

There will be a sample data set (in DB) to use so I have a few trails to mess with on insomnia. Then from that, I can GET, POST, PUT, or DELETE trails for the assignment (in **_Insomnia_**).

## External APIs

No APIs used at this time.
