<?php
/**
*
* @package phpBB Extension - ajay bhasha
* 
* @license http://opensource.org/licenses/gpl-2.0.php GNU General Public License v2
*
*/

namespace ajay\bhasha\migrations;

class ajay_bhasha_schema extends \phpbb\db\migration\migration
{
static public function depends_on()
	{
		return array('\ajay\bhasha\migrations\translator');
	}
		
		public function update_data()
	{
		return array(

			// Add permissions
			array('permission.add', array('u_bhasha_use')),

			// Set permissions
			array('permission.permission_set', array('ADMINISTRATORS', 'u_bhasha_use', 'group')),
		);
	}
}