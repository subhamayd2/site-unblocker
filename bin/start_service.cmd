@ECHO OFF
PUSHD "%~dp0"

echo This script should be run with administrator privileges.
echo Right click - run as administrator.

set _config=%1
IF "%1"=="" (set _config=-2)

rem sc stop "GoodbyeDPI"
rem sc delete "GoodbyeDPI"
sc create "GoodbyeDPI" binPath="%CD%\goodbyedpi.exe %_config%" start= "auto"
sc description "GoodbyeDPI" "Passive Deep Packet Inspection blocker and Active DPI circumvention utility"
sc start "GoodbyeDPI"

POPD
