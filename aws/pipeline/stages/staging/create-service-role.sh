#!/bin/bash

aws iam create-role \
	--role-name PortfolioCodeDeployServiceRole \
	--assume-role-policy-document \
	https://raw.githubusercontent.com/sebastianserrano/portfolio/aws-pipeline/aws/IAM/code-deploy-service-role.json
