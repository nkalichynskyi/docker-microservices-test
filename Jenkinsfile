node('node') {

    currentBuild.result = "SUCCESS"

		stage('Checkout'){

			 checkout scm
		}

		stage('Test'){

			env.NODE_ENV = "test"

			print "Environment will be : ${env.NODE_ENV}"

			sh 'node -v'
			sh 'npm prune'
			sh 'npm install'

		}

		stage('Build Docker'){

				 sh 'docker-compose up -d'
		}

}
