---
layout: post
title: Git - Basic usage and advanced commands 
meta: We are going to see how to use git in a simple way, and how to intall git in Windows and Linux. Furthermore we are goint to review basic and advanced git commands.
description: We are going to see how to use git in a simple way, and how to intall git in Windows and Linux. Furthermore we are goint to review basic and advanced git commands.
summary: Git has a lot of commands and many of them are not popular. If you are a beginner of an advanced user of git, I assure you that this list of commands will give you so much help to you
title-page: Git, basic and advanced commands. 
image: git
lang: en
tags: [Git] 
---


Regards! In this article we are going to see one of the most common git commands, but relax. if you are an advanced git user, don't worry, we we also see not commond and advance git commands.

Firstly, we are gonna se what is git. 

Git is a tool to manage version control, but what is a control version? 

A control version is a way of manage all the changes we made to files. It tracks all the changes so if easy to go back to a previous version.

## Installation and configuration

To install git simply go to this page if you are in a system running windows:


[https://git-scm.com/download/win] (https://git-scm.com/download/win) 

Or this paghe for others systems: 

[https://git-scm.com/downloads] (https://git-scm.com/downloads) 


Once installed git, you can configurate your identity in the shell (if you are in a windows system, execute the git bash):

```bash
git config --global user.name "Your name here"
git config --global user.email example@example.com
```

## Basic commands 

For example, let's say that we are in a project and we want to keep track of the changes we make. Firstly what we have to do it's open the shell and go to the folder
where the project is saved (check out the shell commands to move through the system) and then initialize an empty project by running:

```bash
git init
```
With this command we are saying to git that this folder is a git project so git will gonna look for future changes in the files of the folder.
This command is should be executed once per project.

To see the files that has been changed: 

```bash
git status
```

<img src="http://i.imgur.com/fBoD8Uk.png" class="responsive-img" alt="Git status"> 

To add files to save, use this command:

```bash
git add .
```

This command will gonna save all files that have been change in the folder. 
If we want to add a single file or a folder:

```bash
git add FILE_NAME
```
To remove the files that previously we have saved: 

```bash
git rm .
```
We have added files to be saved but we have not saved yet, to save:

```bash
git commit -m "Name of the commit"
```
We just did our first commit with the files that we have added with the git add command

To print all the commits for a project:

```bash
git log
```
The numbers and letters that appers next to the "commit" word is the indentifier for the commit, with this id, you can revert the files to a previous commit:

```bash
git reset --hard COMMIT_IDENTIFIER
```
This will remove all the commits after the commit we are resetting, but will no delete the commit itself.

## Managing git projects

Now, imagine that we want to download a git project from another server, like Github, for example:

```bash
git clone git://server/route/to/files 
```
For github:

```bash
git clone https://github.com/github_project
```
If we downloaded a git project from another server and someone make a commit to the files, to download the new changes:

```bash
git pull
```
But, if we have changes without save, we need to make a commit before the download.

Then if we have commits, to upload the changes to the remote server:

```bash
git push origin master
```
Origin is the default address to the server, master is the default branch.

To add an adress to a remote server: 

```bash
git remote add origin https://github.com/user/repo.git
```

Origin is setted atomatically when you download a git repo, but you can add more directions.

## Branches

Good, I said how to upload changes from a branch, but, what is a branch?

The branches is used to store changes independently in the same project, we can make a branch based in another branch, then merge two branches, etc

To create a new branch in the git project:

```bash
git checkout -b BRANCH_NAME
```
An to move to another branch:

```bash
git checkout BRANCH_NAME
```
If ypu want to see the lines that have been changed since the last commit:

```bash
git diff
```
With green color, the lines that have been added, and in red the lines removed

## Advanced commands

#### Alias

To make faster git, you can define alias to the commands, with the alias you don't have to write the full git, command, only the alias. This are common alias:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```
With this alias, if you write git co, is the same than write git checkout, for example

#### Discard temporal changes

If you are working in a branch and you want to change to another changes, git will not let you change, so we can discard the changes temporaly:

```bash
git stash
```
If we want to recover this changes:

```bash
git stash pop
```

#### Only one commit pull

If you want to pull changes but only from one commit:

```bash
git cherry-pick <commitSHA>
```

#### Advanced git log 

There are many times than a gill log command offers so much information, so you can write this command to see less information about commits list:

```bash
git log --oneline
```
Another useful command, git graph, that will print a representation of the changes between branches:

```bash
git log --graph --oneline
```

<img src="http://i.imgur.com/M1ZTdBb.png" class="responsive-img" alt="Git log --graph --oneline"> 


We can filter commits also:

```bash
git log --author="John"
git log --after="2014-7-1"
git log -- foo.py bar.py
```

## Conclusion

Git is a powerful tool, with a lot of commands than I didn't explain, so I invite you to research along internet to find new commands for git that maybe help you.  
