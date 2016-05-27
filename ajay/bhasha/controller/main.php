<?php
/**
*
* @package phpBB Extension - Bhasha Parivartan
* @copyright (c) 2016 Ajay Kumar Chaudhary
* @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
*
*/
namespace ajay\bhasha\controller;
class main
{
   /* @var \phpbb\template\template */
   protected $template;
   /* @var \phpbb\user */
   protected $user;
   /* @var \phpbb\controller\helper */
   protected $controller_helper;
 
   /** @var \phpbb\request\request */
   protected $request;
   public function __construct(\phpbb\template\template $template,  \phpbb\user $user, \phpbb\controller\helper $controller_helper, \phpbb\request\request $request)
   {
   $this->template = $template;
   $this->user = $user;
   $this->controller_helper = $controller_helper;
   $this->request = $request;
   }
   public function base()
   {
      $s_action = $this->controller_helper->route('ajay_bhasha_controller');
   }
}