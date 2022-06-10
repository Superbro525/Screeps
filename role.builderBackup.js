var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var with_targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER) && structure.energy < structure.energyCapacity;
                }
        })
        console.log(with_targets)
        console.log(creep.withdraw(with_targets[0], RESOURCE_ENERGY))
        if(with_targets.length > 0) {
            if(creep.withdraw(with_targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(with_targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        


            
        
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }
        
        const targetsToRepair = creep.room.find(FIND_STRUCTURES, {
        filter: object => object.hits < object.hitsMax
        });
        
        targetsToRepair.sort((a,b) => a.hits - b.hits);
        
        
        if(creep.repair(targetsToRepair[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targetsToRepair[0]);
        }
        

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
}
}
module.exports = roleBuilder;