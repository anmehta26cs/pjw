# pjw website
using
- [react](https://reactjs.org/)
- [vite](https://vitejs.dev/)
- [tailwindcss](https://tailwindcss.com/)
- [typescript](https://www.typescriptlang.org/)

## git workflow
1. create an issue on the issue board
2. click on development, change branch source, and create branch
3. clone the repo if you havent already and switch to the new branch
    `git clone https://github.com/anmehta26cs/pjw.git`
    `git branch -a`
    `git checkout <branch_name>`
4. make changes and commit them as you go
    `git add .`
    `git commit -m "#<issue_number> commit message"`
5. push the branch to the repo when you are done
    `git push origin <branch_name>`
6. create a merge request to merge the target branch into the source on GitHub
7. check to make sure pipeline runs successfully and merge the branch