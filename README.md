# Offical StreamingPlatform API! 👋

### NOTE:

This is an api for id's provided at [TMDB](https://www.themoviedb.org/)

you must use the ID from the tmdb url like this :

so 
```
MOVIES:

https://www.themoviedb.org/movie/1034541-terrifier-3?language=en-GB

TV SHOWS:

https://www.themoviedb.org/tv/124364-from?language=en-GB
```
would be 
```
MOVIES:

`/{provider}/1034541`

TVSHOWS :

`/{provider}/124364?s=1&e=1` (s - Season / e - Episode)
```

## Providers

The providers are currently :

```
embedsu
```

## Example Movie
```
https://your-domain/embedsu/916224
```

## Example Show
```
https://your-domain/embedsu/1429?s=1&e=1
```

## Deployment

You can self host by doing the following :

1. `git clone https://github.com/StreamingPlatform/StreamingServer.git`
2. `cd vidsrc-api-js`
3. `npm install`
4. `npm run main`

"This no longer works on vercel due to the source blocking vercel requests but will work on your own server self hosted."

## Credits
```
https://github.com/Inside4ndroid/vidsrc-api-js
```