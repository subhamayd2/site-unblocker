@ECHO OFF
echo This script should be run with administrator privileges.
echo Right click - run as administrator.

sc stop "GoodbyeDPI"
sc delete "GoodbyeDPI"
rem sc stop "WinDivert1.4"
rem sc delete "WinDivert1.4"
