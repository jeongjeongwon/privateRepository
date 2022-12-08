<!DOCTYPE html>
<html>
  <body>
    <?php
    //이번에는 전과 동일한 형태지만 다른 방식으로 진행
    class game_two{
      public $name;
      public $type;

      function __construct($name, $type)
      {
        $this->name = $name;
        $this->type = $type;
      }
      function get_name (){
        return $this->name;
      }
      function get_type(){
        return $this->type;
      }
    }

    $warZone = new game_two("WarZone", "FPS");
    echo $warZone->get_name()."<br>";
    echo $warZone->get_type() . "<br>";
    ?>
  </body>
</html>