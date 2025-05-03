
We are going to use this guideline for collaboration.

Please create a new branch based on the ```dev``` branch every time you start working on a new feature. The branch name should follow this format: yourname_branchcreatedate(yyyyMMdd)_newfeaturename. For example: ```christina_20250322_homepage_animation``` . Thank you so much.

## fork the repository to your account
<img width="1386" alt="image" src="https://github.com/user-attachments/assets/76a68c5e-5e27-43cf-bd5e-5fb4f0e4471a" />

## go to the your account, clone the repository from your account to your local coding environment.
The repository in your account will be the remote（or origin）in your local  coding environment.
<img width="1561" alt="image" src="https://github.com/user-attachments/assets/b84a9596-b1aa-48a8-b903-c25ba293d88f" />

## you will see these branch in your coding environment.

```dev```, ```main```, ```newbranch``` or ```local/dev```, ```local/main```, ```local/newbranch``` ------------ these are branches of the repository in your local coding environment.

```remote/dev```, ```remote/main```, ```remote/newbranch``` or ```origin/dev```, ```origin/main```, ```origin/newbranch```  ------------ these are are branches of the repository in your github account.

```upsteam/dev```, ```upsteam/main```, ```upstream/HAED```  ------------ these are are branches of the repository in think-tree account.

# 1 Before you start to code the new feature

All feature branches are created off the latest code state of the project. Please create a new branch from the ```dev``` branch.

## 1.1 Start with the dev branch

Sync fork on the repository webpage in your github account.

Checkout to the dev branch, pull the latest update to local in your coding environment and discard any local changes.

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

Then [resolve merge conflicts](https://www.geeksforgeeks.org/merge-conflicts-and-how-to-handle-them/)  on your branch, and commit changes.

## 3.1 make a pull request to dev branch
After resolved merge conflictse, please make a pull request on github.

<img width="1394" alt="image" src="https://github.com/user-attachments/assets/aa458c96-de5c-42f8-86cd-07118b7fbaa8" />

<img width="1439" alt="image" src="https://github.com/user-attachments/assets/cfe9eaa9-99e5-4414-bc08-72a5b0efd24d" />

<img width="1458" alt="pull request 3" src="https://github.com/user-attachments/assets/b1354874-840e-4acb-88e4-93591f15f238" />

<img width="1458" alt="pull request 5" src="https://github.com/user-attachments/assets/d8fdbf42-0911-4b79-95b1-dacce16b9202" />

<img width="1364" alt="pull request 7" src="https://github.com/user-attachments/assets/8cfc55cb-8a70-4793-a8ca-9500722d4ac8" />

<img width="1374" alt="pull request 9" src="https://github.com/user-attachments/assets/d3a9a8cc-c642-4a1d-945c-4d39a00db575" />

<img width="1332" alt="pull request 11" src="https://github.com/user-attachments/assets/ff3f5b80-b51e-4696-960c-a1761f8033e1" />

<img width="1212" alt="pull request 12" src="https://github.com/user-attachments/assets/717e1ee8-b01c-4e38-8245-996451d996ca" />





