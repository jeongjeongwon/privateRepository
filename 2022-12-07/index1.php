<!DOCTYPE html>
<html>
  <body>
    <?php
    class game{
      public $name;
      public $type;

      function set_name($name){
        $this->name = $name;
      }
      function get_name(){
        return $this->name;
      }
      function set_type($type){
        $this->name = $type;
      }
      function get_type(){
        return $this->type;
      }
    }

    $Rust = new game();
    $frostFunk = new game();
    $Rust -> set_name('Rust');
    $frostFunk -> set_name('frostFunk');
    $Rust->set_type('FPS게임');
    $frostFunk->set_type('생존 게임');

    echo $Rust->get_name()."<br>";
    echo $Rust->get_type()."<br>";
    echo $frostFunk->get_name()."<br>";
    echo $frostFunk->get_type()."<br>";
    ?>
  </body>
</html>

//가져오기 선언 오류 발생 해결 get_name에 오류구문 발견 후 수정 return으로 set_name에서 받은 자료 출력 전 구문 => $this->name = $name
// name 출력후 type도 시도 같은 방법으로 진행