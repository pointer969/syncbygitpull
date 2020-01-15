const gitPullOrClone = require('git-pull-or-clone')
 
gitPullOrClone('git@github.com:pointer969/s1ngle.git', '/workspace/s1ngle', (err) => {
  if (err) throw err
  console.log('SUCCESS!')
})