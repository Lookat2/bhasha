<?php
/**
*
* @package phpBB Extension - Bhasha Parivartan
* @copyright (c) 2016 Ajay Kumar Chaudhary
* @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
*
*/
namespace ajay\bhasha\acp;
class bhasha_info
 {
    function module()
    {
         return array(
         'filename'  => '\ajay\bhasha\acp\bhasha_module',
         'title'     => 'ACP_BHASHA',
         'modes'     => array(
         'config' => array('title' => 'ACP_BHASHA_CONFIG', 'auth' => 'ext_ajay/bhasha && acl_a_board', 'cat' => array('ACP_BHASHA')),
         ),
      );
   }
}