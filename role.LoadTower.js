var roleTowerLoader = {
    run: function(creep) {
        if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.say('🔄 harvest');
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (
                        
                        structure.structureType == STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            
            var tower = Game.getObjectById('62a2c0a0aeb2d81b3c1295b1')
            if(targets.length > 0 && tower.storage < 950) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.say('⬅ Transfering to Tower');
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    
                }
            }
            
            else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (
                            
                            structure.structureType == STRUCTURE_CONTAINER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.say('⬅ Transfering to Container')
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    
                }
            }
            
        }
    }
}        
module.exports = roleTowerLoader;