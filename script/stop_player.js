// Kill process function
psTree = require('ps-tree');

kill = function (pid, signal, callback, killTree) {
    signal = signal || 'SIGKILL';
    callback = callback || function () {};
    killTree = killTree || false;
    if (killTree) {
        psTree(pid, function (err, children) {
            [pid].concat(
                children.map(function (p) {
                    return p.PID;
                })
            ).forEach(function (tpid) {
                try {
                    process.kill(tpid, signal);
                } catch (e) {
                    console.error(e);
                }
            });
            callback();
        });
    } else {
        try {
            process.kill(pid, signal);
        } catch (e) {
            console.error(e);
        }
        callback();
    }
};

exports.find = function (songName) {
    // Execute kill process function
    const exec = require('child_process').exec;
    exec(`pgrep -f ${songName}`, function (err, stdout, stderr) {
        const pid = stdout.toString();
        const splitPID = pid.split('\n');
        const indivID = splitPID[0];
        const killSignal = 'SIGKILL';
        const uponKill = () => {
            console.log(`Process ${indivID} killed`);
        }
        const hasTree = true;

        setTimeout(() => {
            kill(indivID, killSignal, uponKill, hasTree);
        }, 1000);
    });
}