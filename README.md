# react-dc-dot-com
The ReactDC.com site

## DEVELOPMENT

Workflow:
 - create a feature branch off of the dev branch: `git checkout -b <feature>`
 - as additional features are merged against dev: `git pull -r`
 - rebase dev changes onto your feature: `git rebase dev`
 - as we want the site updated, open a PR from dev -> master to auto-deploy

AWS:
 - create a file `nano ~/.aws/config` with contents:

 ```
 [profile reactdc]
 region = us-west-2
 aws_access_key_id = << key >>
 aws_secret_access_key = << secret >>
 ```

 when trying to manually deploy you should run `eb init` then make sure there
 is a subfolder called `.elasticbeanstalk` with a `config.yml` that has:

 ```
 branch-defaults:
   master:
     environment: reactdc-master
 global:
   application_name: reactdc-master
   default_ec2_keyname: null
   default_platform: Node.js
   default_region: us-west-2
   profile: reactdc
   sc: git
```

then type `eb deploy`

 - start the server with `npm start` which dumps AWS_PROFILE via command line

ENVIRONMENT VARIABLES:
 - create a `.env` file with the following entries:

 ```
 OAUTH_KEY=<< twitter key >>
 OAUTH_SECRET=<< twitter secret >>
 API_HOST=http://localhost:3000
 ```
