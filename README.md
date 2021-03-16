# Profile Page

Install app  :
 ```
 yarn install
 ```
You can run :  
```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

## Bulid Your own profile
If you want to  build you own profile, follow below steps to  set it up
- We have `Variables.js` under `src/utils`.
- You can update `name` field to get your name.
- In `profile`, you can add url of your profile img or  you get from local drive. Under `assets` folder replace your profile with name of  `profile.jpg`
- You can add your `Key:Value` pair with Key as Tittle, Value as URL. This will create link to your content.
- Save the file and run `yarn start` in local to test. 

Then create docker, 
## Build Docker
```
docker build -f Dockerfile -t profile-image:latest .
```
## Run docker locally
```
docker run -it -p 80:80 --rm profile-image:latest
```
And push to docker hub.

## Deploy in Akash
- You can find `deploy.yml` main project directory; update with your docker image.

### Create Deployment 
```
akash tx deployment create deploy.yaml --from <from-name> --chain-id akashnet-2 -b block --fees <uakt> --node <rpc-address>
```
### Query bid list 

```
akash query market bid list --owner <owner-address>
```
### Create lease
>Note: you get provider address, dseq, oseq, gseq from above query cmd
```
akash tx market lease create --from <from-name > --owner <owner-address> --provider <provider-address> --dseq xxx --oseq 1 --gseq 1 --fees <xuakt> -b block --chain-id akashnet-2 

```

### Send Manifesto to Provider
```
akash provider send-manifest deploy.yaml --dseq xxx --provider <provider-address> --from <from-name> 
```
- Use [ Deployment docs](https://github.com/tombeynon/akash-hello-world) from our friend @tombeynon or 
- Use [Official Akash Docs](https://docs.akash.network/guides/deploy) 
