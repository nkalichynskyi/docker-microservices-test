pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.book'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm -v'
      }
    }
  }
}