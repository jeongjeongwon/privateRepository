<!DOCTYPE html>
<html>
  <body>
    <?php
    //오늘 해볼 마지막진행
    class game_three{
      public $name;
      public $type;

      function __construct($name, $type)
      {
        $this->name = $name;
        $this->type = $type;
      }
      function __destruct()
      {
        echo "이 게임의 이름은 {$this->name}이고 장르는 {$this->type} 입니다";
      }
    }

    $somesomeStore = new game_three("SomeSomeStore", "비쥬얼 노벨");
    ?>
  </body>
</html>