<!DOCTYPE html>
<html>
<head>
<style>
table, td, th {
    border: 2px solid black;
    border-collapse: collapse;
}}
</style>
<body>

<table class="tabela">
<tr>
    <th>Title</th>
    <th>Year</th>
    <th>Director</th>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<?php
    $dbhost = 's687.loopia.se';
    $dbuser = 'qa@q45069';
    $dbpass = 'Qamaster123';
    $db  = 'qabadgers_com';
    
    $con=mysqli_connect("$dbhost", "$dbuser", "$dbpass");
    mysqli_select_db($con, $db);
    $result = mysqli_query($con, "select title, year, director from movies ");
    
        while($row=mysqli_fetch_array($result)){
        echo "<tr>";
        echo "<td>" . $row['title'] . "</td>";
        echo "<td>" . $row['year'] . "</td>";
        echo "<td>" . $row['director'] . "</td>";
        echo "</tr>";
        }
        echo "</table>";
?>
</table>
</body>
</html>