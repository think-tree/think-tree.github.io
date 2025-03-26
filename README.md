
We are going to use feature branch workflow for collaboration.

Please create a new branch every time you start working on a new feature. The branch name should follow this format: yourname_branchcreatedate(yyyyMMdd)_newfeaturename. For example: ```christina_20250322_homepage_animation``` . Thank you so much.

## fork the repository to your account
<img width="1386" alt="image" src="https://github.com/user-attachments/assets/76a68c5e-5e27-43cf-bd5e-5fb4f0e4471a" />

## go to the your account, clone the repository from your account to your in your local coding environment.the repository in your account will be the remote（or origin）in your local  coding environment.
<img width="1561" alt="image" src="https://github.com/user-attachments/assets/b84a9596-b1aa-48a8-b903-c25ba293d88f" />

## you will see these branch in your coding environment.

```dev```, ```main```, ```newbranch``` or ```local/dev```, ```local/main```, ```local/newbranch``` ------------ these are branches of the repository in your local coding environment.

```remote/dev```, ```remote/main```, ```remote/newbranch``` or ```origin/dev```, ```origin/main```, ```origin/newbranch```  ------------ these are are branches of the repository in your github account.

```upsteam/dev```, ```upsteam/main```, ```upstream/HAED```  ------------ these are are branches of the repository in think-tree account.

# 1 Before you start to code the new feature

All feature branches are created off the latest code state of the project. please create a new branch from the dev branch.

## 1.1 Start with the dev branch

Sync fork on the repository webpage in your github account.

Checkout to the dev branch and pull the latest update to local in your coding environment.

```
git checkout dev
git fetch origin 
git reset --hard origin/dev
```

## 1.2 Create a new-branch
```
git checkout -b new-feature-name
```
This checks out a branch called  new-feature-name, and the -b flag tells Git to create the branch if it doesn’t already exist.

# 2 when you are coding the new feature

## 2.1 Update, add, commit, and push changes
On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch.
```
git status
git add <some-file>
git commit
```

## 2.2 Push feature branch to remote
It’s a good idea to push the feature branch up to the remote. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.
```
git push -u origin new-feature-name
```
# 3 After you complete the new feature

After you commited and pushed all your updates to the remote, please resolve merge conflicts and make a pull request on github.

## 3.1  resolve merge conflicts

Sync fork on the repository webpage in your github account.

Checkout to the dev branch and pull the latest update to local in your coding environment.

Checkout to your branch then merge the dev branch to your branch in your coding environment.

Then [resolve merge conflicts.](https://www.geeksforgeeks.org/merge-conflicts-and-how-to-handle-them/)  on your branch, and commit changes.

## 3.1 make a pull request to dev branch
After resolved merge conflictse, please make a pull request on github.

<img width="1443" alt="image" src="https://github.com/user-attachments/assets/12a26cfb-612d-46a5-8407-b8b6ca07f195" />

<img width="1391" alt="image" src="https://github.com/user-attachments/assets/03eeff6e-f5b0-404b-802c-43662c53f6dd" />

<img width="1455" alt="image" src="https://github.com/user-attachments/assets/94eceb1a-fbb0-4aa1-a254-ed78ec508163" />

<img width="1453" alt="image" src="https://github.com/user-attachments/assets/930633f5-6157-4ebd-8da1-59ab7609930e" />

<img width="1345" alt="image" src="https://github.com/user-attachments/assets/c018b332-a213-4f6d-9ce1-109b819cac4a" />



