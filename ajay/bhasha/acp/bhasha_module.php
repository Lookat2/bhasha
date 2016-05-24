<?php
/**
*
* @package phpBB Extension - Bhasha Parivartan
* @copyright (c) 2016 Ajay Kumar Chaudhary
* @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
*
*/
namespace ajay\bhasha\acp;
class bhasha_module
{
var $u_action;
   function main($id, $mode)
   {
      global $db, $user, $auth, $template, $cache, $request;
      global $config, $phpbb_root_path, $phpbb_admin_path, $phpEx;
      $this->tpl_name = 'acp_bhasha_config';
      $this->page_title = $user->lang['ACP_BHASHA_CONFIG'];
      add_form_key('acp_bhasha_config');
      
      $submit = $request->is_set_post('submit');
      if ($submit)
      {
         if (!check_form_key('acp_bhasha_config'))
         {
            trigger_error('FORM_INVALID');
         }
         $config->set('bhasha_default_lang', ($request->variable('bhasha_default_lang', '')));
         $config->set('bhasha_choice_lang', ($request->variable('bhasha_choice_lang', '')));
         trigger_error($user->lang['BHASHA_CONFIG_SAVED'] . adm_back_link($this->u_action));
      }
      $template->assign_vars(array(
         'TRANSLATE_VERSION'        		=> (isset($config['bhasha_version'])) ? $config['bhasha_version'] : '',
         'TRANSLATE_DEFAULT_LANG'        	=> (isset($config['bhasha_default_lang'])) ? $config['bhasha_default_lang'] : '',
         'TRANSLATE_CHOICE_LANG'       		=> (isset($config['bhasha_choice_lang'])) ? $config['bhasha_choice_lang'] : '',
         'U_ACTION'              		=> $this->u_action,
      ));
   }
}