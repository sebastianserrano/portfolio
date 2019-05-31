#!/bin/bash

usage() { echo "Usage: $0 [-c capabilities] [-n stack name] [-f filename] [-k parameter key] [-v parameter value]" 1>&2; exit 1; }

while getopts ":c:n:f:k:v:" option;
do
	case "${option}" in
		c)
			capability=${OPTARG}
			;;
		n)
			name=${OPTARG}
			;;
		f)
			file=${OPTARG}
			;;
		k)
			key=${OPTARG}
			;;
		v)
			value=${OPTARG}
			;;
		*)
			usage
			;;
	esac
done

shift $((OPTIND-1))

if [ -z "${capability}" ] || [ -z "${name}" ] || [ -z "${file}" ] || [ -z "${key}" ] || [ -z "${value}" ];
then
	usage
fi

aws cloudformation create-stack \
	--capabilities $capability \
	--stack-name $name \
	--template-body file://$file \
	--parameters ParameterKey=$key,ParameterValue=$value
