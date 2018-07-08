# Git: 
  Git is open source distributed version control system. Distributed version control system means is a form of version control where the complete codebase - including its full history - is mirrored on every developer's computer. This allows branching and merging to be managed automatically, increases speeds of most operations, improves the ability to work offline, and does not rely on a single location for backups. SVN is also one kind of version control system.
  
# GitHub: 
  GitHub is a web-based hosting service for software development projects that use the Git revision control system. GitHub offers both paid plans for private repositories, and free accounts for open source projects. Another github like web-based hosting service is bitbucket.
   
# Git basic commands:
    * git init: Initializes git repo.
    * git clone <REPO_URL>: For cloning new git repo.
    * git checkout -b <BRANCH_NAME>: Creates new branch.
    * git checkout <BRANCH_NAME>: Switches the mentioned branch.
    * git fetch: Fetches the remote changes/branches. Can be used with flags: --all, etc
    * git status: Logs the changed files.
    * git add: Adds the changes to locally.
    * git commit -m "<COMMIT_MESSAGE>": Commit message.
    * git pull: Pulls the remote changes.
    * git push: Pushes the local changes to remote.
    * git log: Logs the commits.
    * git reset --hard <COMMIT_ID>: Points to mentioned commit id.
    * git config --global user.email "kiranbangale@gmail.com": sets email id.
    * git config --global user.name "kiranbangale": sets user name.

# Source Tree: 
  Source tree is tool to manage multiple git repositories easly. It allows branching, fatching, pulling, pushing, etc.
  
# Project setup by Source Tree: 
    * Goto Clone/New option in top menu bar.
    * Paste the git repo URL and mention the desired destination path on your machine and proceed.
    * Once the repo is downloaded, you can start working on it.
    * In left side menu Branches, Tags, Submodules, Remotes optiones are mentioned. Just double click on the desired optioned and the work is done!
    * For pointing perticular commit, just double click on it!
    * In top menu Fetch, Pull, Push options are available.
    * For integrating submodule create .gitmodules file and mention the submodule name, local path, repo url and branch name.
