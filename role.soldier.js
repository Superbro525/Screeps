var roleSoldier = {
    run: function(creep) {
        var enemies= creep.room.find(Game.HOSTILE_CREEPS);
        if(creep.attack(enemies[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(enemies[0])
        }
    }
}

module.exports = roleSoldier;
