pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        nodejs('NodeJs_9_11_1') {
          sh 'pwd'
          sh 'npm install'
          sh 'CHROME_BIN=/usr/bin/chromium-browser npm run test-run'
        }
      }
    }
    stage('build') {
      steps {
        nodejs('NodeJs_9_11_1') {
          sh 'npm run build-dev'
          zip zipFile: 'build2.zip', archive: false, dir: 'dist'
        }
      }
      }
      stage('report') {
      steps {
        nodejs('NodeJs_9_11_1') {
        archiveArtifacts artifacts: 'build2.zip', fingerprint: true
        //archiveArtifacts(artifacts: 'dist/*.*', allowEmptyArchive: true)
      }
    }
      }
  }
  post {
        always {
            junit 'build/reports/*.xml'
        }
    }
}
