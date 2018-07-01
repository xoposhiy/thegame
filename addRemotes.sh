for i in 1 2 3 4 5 6 7 8
do
    git remote add t$i git@github.com:TheGameHackathon/intern2018-team$i.git
    git push -u t$i master
done