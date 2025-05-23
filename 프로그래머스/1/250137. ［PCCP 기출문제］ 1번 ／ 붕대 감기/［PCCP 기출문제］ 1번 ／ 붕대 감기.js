function solution(bandage, health, attacks) {
    // 연속 성공 횟수
    let healCnt = 0;
    // 현재 체력
    let currentHealth = health;
    // 회복 시전 라운드
    const healRound = bandage[0];
    // 라운드당 체력
    const healPerRound = bandage[1];
    // 추가 체력
    const addHeal = bandage[2];
    const attackLength = attacks.length - 1
    // 마지막 공격 라운드
    const finalAttackRound = attacks[attackLength][0];
    
    // attacks의 마지막 배열의 1번째 인자만큼 for문 
    for(let i = 1; i <= finalAttackRound; i++){
        // 공격 라운드
        let attackRound = attacks[0][0];
        let attackDamage = attacks[0][1];
    
        // 해당 라운드에 공격이 있으면
        if(attackRound === i ){
            currentHealth += -attackDamage
            attacks.splice(0,1)
            healCnt = 0;

            // 공격 후 체력이 0 이거나 작으면 return -1
            if(currentHealth <= 0){
                return - 1;
            }
        }else{
            // 초당 회복력씩 증가
            currentHealth += healPerRound;
            // 연속 횟수 증가
            healCnt += 1;
            if(healCnt === healRound){
                // 연속 횟수가 bandage[0]만큼 도달하면 bandage[2]만큼 추가 회복
                currentHealth += addHeal
                healCnt = 0;
            }
            if(currentHealth >= health){
                // 최대 health 초과 불가능
                currentHealth = health;
            }

        }   

    }
    
    return currentHealth;
}